// js/app.js
import { cardsData } from './cards-data.js';
import { renderDashboard } from './dashboard.js';
import { renderFlip } from './flip.js';
import { renderMultipleChoice } from './multiplechoice.js';
import { renderFreetext } from './freetext.js';
import { loadProgress } from './storage.js';
import { getDueCount, getStreak } from './sm2.js';

let activeId = null;

const COLLAPSED_KEY = 'ap2_collapsed';
function loadCollapsed() {
  try { return new Set(JSON.parse(localStorage.getItem(COLLAPSED_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveCollapsed(set) {
  localStorage.setItem(COLLAPSED_KEY, JSON.stringify([...set]));
}
let collapsedFaecher = loadCollapsed();

// --- Hilfsfunktionen ---

function alleThemen() {
  return cardsData.faecher.flatMap(f => f.themen);
}

function alleKarten() {
  return alleThemen().flatMap(t => t.karten);
}

function findThema(id) {
  for (const fach of cardsData.faecher) {
    const t = fach.themen.find(t => t.id === id);
    if (t) return t;
  }
  return null;
}

function elektroKarten() {
  return cardsData.faecher.filter(f => f.id !== 'wbl').flatMap(f => f.themen.flatMap(t => t.karten));
}

function resolveSelection(id) {
  if (id === 'alle') {
    return { id: 'alle', name: 'Alle Karten', karten: alleKarten() };
  }
  if (id === 'elektro') {
    return { id: 'elektro', name: 'Elektro Allgemein', karten: elektroKarten() };
  }
  if (id.startsWith('fach:')) {
    const fachId = id.slice(5);
    const fach = cardsData.faecher.find(f => f.id === fachId);
    if (!fach) return null;
    return { id, name: 'Alle ' + fach.name, karten: fach.themen.flatMap(t => t.karten) };
  }
  return findThema(id);
}

// --- Init ---

function init() {
  setupThemeToggle();
  updateHeader();

  const firstThema = cardsData.faecher[0]?.themen[0];
  if (firstThema) select(firstThema.id);
  else renderSidebar();
}

// --- Selektion ---

function select(id) {
  activeId = id;
  renderSidebar();
  const thema = resolveSelection(id);
  if (!thema) return;
  renderDashboard(thema, { onMode: startMode });
}

export function startMode(thema, modus) {
  const done = () => { updateHeader(); select(thema.id); };
  if (modus === 'flip') renderFlip(thema, { onDone: done });
  if (modus === 'mc') renderMultipleChoice(thema, { onDone: done });
  if (modus === 'freitext') renderFreetext(thema, { onDone: done });
}

// --- Sidebar ---

function getProgress(karten, progress) {
  const gesamt = karten.length;
  const gelernt = karten.filter(k => (progress[k.id]?.wiederholungen ?? 0) >= 3).length;
  return { gesamt, gelernt, prozent: gesamt ? Math.round((gelernt / gesamt) * 100) : 0 };
}

function makeSidebarItem(id, name, karten, progress, indent) {
  const p = getProgress(karten, progress);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'sidebar-item' + (id === activeId ? ' active' : '') + (indent ? ' sidebar-item--indent' : '');

  const nameEl = document.createElement('span');
  nameEl.className = 'sidebar-item-name';
  nameEl.textContent = name;
  btn.appendChild(nameEl);

  if (karten.length > 0) {
    const meta = document.createElement('span');
    meta.className = 'sidebar-item-meta';
    meta.textContent = `${p.gelernt}/${p.gesamt}`;
    btn.appendChild(meta);

    const barOuter = document.createElement('div');
    barOuter.className = 'progress-bar';
    const barFill = document.createElement('div');
    barFill.className = 'progress-bar-fill';
    barFill.style.width = p.prozent + '%';
    barOuter.appendChild(barFill);
    btn.appendChild(barOuter);
  } else {
    const empty = document.createElement('span');
    empty.className = 'sidebar-item-meta sidebar-item-empty';
    empty.textContent = 'leer';
    btn.appendChild(empty);
  }

  btn.addEventListener('click', () => select(id));
  return btn;
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = '';
  const progress = loadProgress();
  const karten = alleKarten();

  // Alle Karten + Filter
  if (karten.length > 0) {
    sidebar.appendChild(makeSidebarItem('alle', 'Alle Karten', karten, progress, false));
    sidebar.appendChild(makeSidebarItem('fach:wbl', 'WBL', cardsData.faecher.find(f => f.id === 'wbl')?.themen.flatMap(t => t.karten) ?? [], progress, true));
    sidebar.appendChild(makeSidebarItem('elektro', 'Elektro Allgemein', elektroKarten(), progress, true));
    const div = document.createElement('div');
    div.className = 'sidebar-divider';
    sidebar.appendChild(div);
  }

  // Fächer
  for (const fach of cardsData.faecher) {
    const fachKarten = fach.themen.flatMap(t => t.karten);

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'sidebar-fach' + ('fach:' + fach.id === activeId ? ' active' : '');

    const fachName = document.createElement('span');
    fachName.textContent = fach.name;
    header.appendChild(fachName);

    if (fachKarten.length > 0) {
      const badge = document.createElement('span');
      badge.className = 'sidebar-fach-badge';
      badge.textContent = fachKarten.length;
      header.appendChild(badge);
    }

    const arrow = document.createElement('span');
    arrow.className = 'sidebar-fach-arrow';
    const isCollapsed = collapsedFaecher.has(fach.id);
    arrow.textContent = isCollapsed ? '▸' : '▾';
    header.appendChild(arrow);

    const themesDiv = document.createElement('div');
    themesDiv.className = 'sidebar-themes';
    if (isCollapsed) themesDiv.classList.add('sidebar-themes--collapsed');

    for (const thema of fach.themen) {
      themesDiv.appendChild(makeSidebarItem(thema.id, thema.name, thema.karten, progress, true));
    }

    header.addEventListener('click', () => {
      if (collapsedFaecher.has(fach.id)) {
        collapsedFaecher.delete(fach.id);
      } else {
        collapsedFaecher.add(fach.id);
      }
      saveCollapsed(collapsedFaecher);
      select('fach:' + fach.id);
    });
    sidebar.appendChild(header);
    sidebar.appendChild(themesDiv);
  }
}

// --- Header ---

function updateHeader() {
  const progress = loadProgress();
  const karten = alleKarten();
  document.getElementById('due-display').textContent = getDueCount(karten, progress) + ' fällig';
  document.getElementById('streak-display').textContent = '🔥 ' + getStreak(progress) + ' Tage';
}

function setupThemeToggle() {
  const btn = document.getElementById('btn-theme');
  const saved = localStorage.getItem('ap2_theme') || 'dark';
  document.documentElement.dataset.theme = saved;
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('ap2_theme', next);
  });
}

init();
