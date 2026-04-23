// js/app.js
import { cardsData } from './cards-data.js';
import { renderDashboard } from './dashboard.js';
import { renderFlip } from './flip.js';
import { renderMultipleChoice } from './multiplechoice.js';
import { renderFreetext } from './freetext.js';
import { loadProgress } from './storage.js';
import { getDueCount, getStreak } from './sm2.js';

let activeThemaId = null;

function init() {
  setupThemeToggle();
  renderSidebar();
  updateHeader();

  if (cardsData.themen.length > 0) {
    selectThema(cardsData.themen[0].id);
  }
}

function setupThemeToggle() {
  const btn = document.getElementById('btn-theme');
  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('ap2_theme', next);
  });
  const saved = localStorage.getItem('ap2_theme') || 'dark';
  document.documentElement.dataset.theme = saved;
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = '';
  const progress = loadProgress(); // single read, not inside loop

  for (const thema of cardsData.themen) {
    const themaProgress = getThemaProgress(thema, progress);

    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'sidebar-item' + (thema.id === activeThemaId ? ' active' : '');
    item.dataset.id = thema.id;

    const nameEl = document.createElement('div');
    nameEl.className = 'sidebar-item-name';
    nameEl.textContent = thema.name; // textContent, no XSS

    const progressEl = document.createElement('div');
    progressEl.className = 'sidebar-item-progress';
    progressEl.textContent = `${themaProgress.gelernt}/${themaProgress.gesamt} gelernt`;

    const barOuter = document.createElement('div');
    barOuter.className = 'progress-bar';
    const barFill = document.createElement('div');
    barFill.className = 'progress-bar-fill';
    barFill.style.width = themaProgress.prozent + '%';
    barOuter.appendChild(barFill);

    item.appendChild(nameEl);
    item.appendChild(progressEl);
    item.appendChild(barOuter);

    item.addEventListener('click', () => selectThema(thema.id));
    sidebar.appendChild(item);
  }
}

function getThemaProgress(thema, progress) {
  const gesamt = thema.karten.length;
  const gelernt = thema.karten.filter(k => {
    const p = progress[k.id];
    return p && p.wiederholungen >= 3;
  }).length;
  return { gesamt, gelernt, prozent: gesamt ? Math.round((gelernt / gesamt) * 100) : 0 };
}

function updateHeader() {
  const progress = loadProgress();
  const alleKarten = cardsData.themen.flatMap(t => t.karten);
  document.getElementById('due-display').textContent =
    getDueCount(alleKarten, progress) + ' fällig';
  document.getElementById('streak-display').textContent =
    '🔥 ' + getStreak(progress) + ' Tage';
}

export function selectThema(themaId) {
  activeThemaId = themaId;
  renderSidebar();
  const thema = cardsData.themen.find(t => t.id === themaId);
  renderDashboard(thema, { onMode: startMode });
}

export function startMode(thema, modus) {
  if (modus === 'flip') renderFlip(thema, { onDone: () => { updateHeader(); selectThema(thema.id); } });
  if (modus === 'mc') renderMultipleChoice(thema, { onDone: () => { updateHeader(); selectThema(thema.id); } });
  if (modus === 'freitext') renderFreetext(thema, { onDone: () => { updateHeader(); selectThema(thema.id); } });
}

init();
