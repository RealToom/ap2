# AP2 Karteikarten-App — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lokale HTML/CSS/JS-App zum Lernen auf die AP2 — lädt Karten aus `cards.json`, bietet drei Lernmodi (Flip, Multiple Choice, Freitext) und Spaced Repetition via SM-2.

**Architecture:** Reines Frontend ohne Build-Tools. ES-Module im Browser. Jede Datei hat eine klare Zuständigkeit. Fortschritt in `localStorage`, Karten in `cards.json`. Kein Server, kein API-Key.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES Modules), localStorage, kein Framework, kein Build-Step.

---

## Datei-Struktur

```
AP2/
  index.html              # App-Shell, importiert app.js als ES-Modul
  style.css               # Alle Styles inkl. Dark/Light-Theme
  cards.json              # Kartendaten (von Claude generiert)
  js/
    app.js                # Einstiegspunkt: Router, Navigation, Events
    sm2.js                # SM-2 Algorithmus (pure functions, testbar)
    storage.js            # localStorage lesen/schreiben
    dashboard.js          # Dashboard-View (Fortschritt, Streak, fällige Karten)
    flip.js               # Lernmodus: Karteikarte
    multiplechoice.js     # Lernmodus: Multiple Choice
    freetext.js           # Lernmodus: Freitext
```

---

## Task 1: Projekt-Grundstruktur + cards.json

**Files:**
- Create: `index.html`
- Create: `style.css` (nur Reset + Basis)
- Create: `cards.json`
- Create: `js/app.js` (Skeleton)

- [ ] **Schritt 1: `cards.json` erstellen**

```json
{
  "meta": { "version": 1, "sprache": "de" },
  "themen": [
    {
      "id": "thema-wbl",
      "name": "WBL",
      "karten": [
        {
          "id": "k-001",
          "frage": "Was versteht man unter dem Prinzip der Wirtschaftlichkeit?",
          "antwort": "Mit minimalem Einsatz einen maximalen Nutzen erzielen (Minimal- oder Maximalprinzip).",
          "stichworte": ["Wirtschaftlichkeit", "Minimalprinzip", "Maximalprinzip", "Nutzen"],
          "falschantworten": [
            "Den Gewinn durch Preiserhöhungen maximieren.",
            "Alle Ressourcen vollständig verbrauchen.",
            "Kosten und Erträge stets gleich halten."
          ],
          "schwierigkeit": "mittel"
        }
      ]
    }
  ]
}
```

- [ ] **Schritt 2: `index.html` erstellen**

```html
<!DOCTYPE html>
<html lang="de" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AP2 Lernapp</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="header">
    <span class="header-title">AP2 Lernapp</span>
    <span class="header-streak" id="streak-display">🔥 0 Tage</span>
    <span class="header-due" id="due-display">0 fällig</span>
    <button class="btn-theme" id="btn-theme">☀️</button>
  </header>

  <div class="layout">
    <nav class="sidebar" id="sidebar">
      <!-- Themen werden hier per JS eingefügt -->
    </nav>
    <main class="main" id="main">
      <!-- Aktive View wird hier eingefügt -->
    </main>
  </div>

  <script type="module" src="js/app.js"></script>
</body>
</html>
```

- [ ] **Schritt 3: `style.css` Basis erstellen**

```css
/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* Theme-Variablen */
:root[data-theme="dark"] {
  --bg: #1a1a2e;
  --surface: #16213e;
  --surface2: #0f3460;
  --text: #e0e0e0;
  --text-muted: #888;
  --accent: #e94560;
  --accent2: #0f3460;
  --correct: #2ecc71;
  --wrong: #e74c3c;
  --border: #333;
}
:root[data-theme="light"] {
  --bg: #f5f5f5;
  --surface: #ffffff;
  --surface2: #e8e8e8;
  --text: #1a1a2e;
  --text-muted: #666;
  --accent: #e94560;
  --accent2: #0f3460;
  --correct: #27ae60;
  --wrong: #c0392b;
  --border: #ddd;
}

body { background: var(--bg); color: var(--text); font-family: system-ui, sans-serif; min-height: 100vh; }

/* Layout */
.header {
  display: flex; align-items: center; gap: 1rem;
  padding: 0.75rem 1.5rem; background: var(--surface);
  border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 10;
}
.header-title { font-weight: 700; font-size: 1.1rem; margin-right: auto; }
.btn-theme { background: none; border: 1px solid var(--border); border-radius: 6px; padding: 0.25rem 0.5rem; cursor: pointer; color: var(--text); }

.layout { display: flex; min-height: calc(100vh - 48px); }
.sidebar {
  width: 220px; min-width: 220px; background: var(--surface);
  border-right: 1px solid var(--border); padding: 1rem 0;
}
.main { flex: 1; padding: 2rem; }

/* Sidebar */
.sidebar-item {
  padding: 0.6rem 1.5rem; cursor: pointer; border-left: 3px solid transparent;
  transition: background 0.15s;
}
.sidebar-item:hover { background: var(--surface2); }
.sidebar-item.active { border-left-color: var(--accent); background: var(--surface2); }
.sidebar-item-name { font-weight: 600; font-size: 0.9rem; }
.sidebar-item-progress { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
.progress-bar { height: 4px; background: var(--border); border-radius: 2px; margin-top: 4px; }
.progress-bar-fill { height: 100%; background: var(--accent); border-radius: 2px; transition: width 0.3s; }

/* Buttons */
.btn { padding: 0.6rem 1.4rem; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 600; transition: opacity 0.15s; }
.btn:hover { opacity: 0.85; }
.btn-primary { background: var(--accent); color: #fff; }
.btn-secondary { background: var(--surface2); color: var(--text); }
.btn-correct { background: var(--correct); color: #fff; }
.btn-wrong { background: var(--wrong); color: #fff; }
```

- [ ] **Schritt 4: `js/app.js` Skeleton erstellen**

```js
// js/app.js
import { renderDashboard } from './dashboard.js';
import { renderFlip } from './flip.js';
import { renderMultipleChoice } from './multiplechoice.js';
import { renderFreetext } from './freetext.js';
import { loadProgress } from './storage.js';
import { getDueCount, getStreak } from './sm2.js';

let cardsData = null;
let activeThemaId = null;

async function init() {
  const res = await fetch('./cards.json');
  cardsData = await res.json();

  setupThemeToggle();
  renderSidebar();
  updateHeader();

  // Starte mit Dashboard des ersten Themas
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
  for (const thema of cardsData.themen) {
    const progress = loadProgress();
    const themaProgress = getThemaProgress(thema, progress);
    const item = document.createElement('div');
    item.className = 'sidebar-item' + (thema.id === activeThemaId ? ' active' : '');
    item.dataset.id = thema.id;
    item.innerHTML = `
      <div class="sidebar-item-name">${thema.name}</div>
      <div class="sidebar-item-progress">${themaProgress.gelernt}/${themaProgress.gesamt} gelernt</div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${themaProgress.prozent}%"></div></div>
    `;
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
  const main = document.getElementById('main');
  if (modus === 'flip') renderFlip(thema, { onDone: () => { updateHeader(); selectThema(thema.id); } });
  if (modus === 'mc') renderMultipleChoice(thema, { onDone: () => { updateHeader(); selectThema(thema.id); } });
  if (modus === 'freitext') renderFreetext(thema, { onDone: () => { updateHeader(); selectThema(thema.id); } });
}

init();
```

- [ ] **Schritt 5: Browser öffnen und prüfen**

Datei `index.html` im Browser öffnen (Doppelklick oder Drag & Drop in Chrome/Firefox).
Erwartung: Seite lädt, Header sichtbar, Sidebar mit "WBL", keine JS-Fehler in der Konsole (F12).

---

## Task 2: SM-2 Algorithmus (`js/sm2.js`)

**Files:**
- Create: `js/sm2.js`

Der SM-2-Algorithmus berechnet, wann eine Karte das nächste Mal wiederholt werden soll.

- [ ] **Schritt 1: `js/sm2.js` erstellen**

```js
// js/sm2.js

/**
 * Berechnet das neue SM-2-Intervall nach einer Antwort.
 * @param {object} cardState - { intervall, wiederholungen, easeFactor } oder {}
 * @param {number} bewertung - 0 (falsch) oder 1 (richtig)
 * @returns {object} Neuer State: { intervall, wiederholungen, easeFactor, naechsteWiederholung }
 */
export function berechneIntervall(cardState, bewertung) {
  let { intervall = 1, wiederholungen = 0, easeFactor = 2.5 } = cardState || {};

  if (bewertung === 0) {
    // Falsch: zurück zum Start
    wiederholungen = 0;
    intervall = 1;
  } else {
    // Richtig
    if (wiederholungen === 0) intervall = 1;
    else if (wiederholungen === 1) intervall = 6;
    else intervall = Math.round(intervall * easeFactor);

    easeFactor = Math.max(1.3, easeFactor + 0.1 - (1 - bewertung) * 0.08);
    wiederholungen += 1;
  }

  const naechsteWiederholung = Date.now() + intervall * 24 * 60 * 60 * 1000;
  return { intervall, wiederholungen, easeFactor, naechsteWiederholung };
}

/**
 * Gibt zurück wie viele Karten heute fällig sind.
 * @param {Array} alleKarten - Alle Karten aus allen Themen
 * @param {object} progress - { [karteId]: cardState }
 */
export function getDueCount(alleKarten, progress) {
  const jetzt = Date.now();
  return alleKarten.filter(k => {
    const p = progress[k.id];
    if (!p) return true; // Noch nie gelernt = fällig
    return p.naechsteWiederholung <= jetzt;
  }).length;
}

/**
 * Gibt die fälligen Karten eines Themas zurück (gemischt).
 */
export function getFaelligeKarten(thema, progress) {
  const jetzt = Date.now();
  const faellig = thema.karten.filter(k => {
    const p = progress[k.id];
    if (!p) return true;
    return p.naechsteWiederholung <= jetzt;
  });
  return shuffle(faellig);
}

/**
 * Berechnet die aktuelle Lernserie (Streak) in Tagen.
 * Prüft, ob heute und gestern mindestens eine Karte gelernt wurde.
 */
export function getStreak(progress) {
  const gelernteTageDates = new Set(
    Object.values(progress)
      .map(p => p.letzteAntwort)
      .filter(Boolean)
      .map(ts => new Date(ts).toDateString())
  );

  let streak = 0;
  const heute = new Date();
  for (let i = 0; i < 365; i++) {
    const tag = new Date(heute);
    tag.setDate(heute.getDate() - i);
    if (gelernteTageDates.has(tag.toDateString())) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
```

- [ ] **Schritt 2: Algorithmus manuell testen**

Öffne Browser-Konsole (F12) und gib ein:

```js
import('./js/sm2.js').then(m => {
  // Neue Karte, richtig beantwortet
  console.log(m.berechneIntervall({}, 1));
  // Erwartung: intervall=1, wiederholungen=1

  // Nach 1 Wiederholung, richtig
  console.log(m.berechneIntervall({ intervall: 1, wiederholungen: 1, easeFactor: 2.5 }, 1));
  // Erwartung: intervall=6, wiederholungen=2

  // Falsch beantwortet
  console.log(m.berechneIntervall({ intervall: 6, wiederholungen: 2, easeFactor: 2.5 }, 0));
  // Erwartung: intervall=1, wiederholungen=0
});
```

---

## Task 3: Storage Modul (`js/storage.js`)

**Files:**
- Create: `js/storage.js`

- [ ] **Schritt 1: `js/storage.js` erstellen**

```js
// js/storage.js

const KEY = 'ap2_fortschritt';

/**
 * Lädt den gesamten Fortschritt aus localStorage.
 * @returns {object} { [karteId]: { intervall, wiederholungen, easeFactor, naechsteWiederholung, letzteAntwort } }
 */
export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

/**
 * Speichert den Fortschritt für eine einzelne Karte.
 * @param {string} karteId
 * @param {object} cardState - Ergebnis von berechneIntervall()
 */
export function saveCardProgress(karteId, cardState) {
  const all = loadProgress();
  all[karteId] = { ...cardState, letzteAntwort: Date.now() };
  localStorage.setItem(KEY, JSON.stringify(all));
}

/**
 * Setzt den Fortschritt einer einzelnen Karte zurück.
 */
export function resetCard(karteId) {
  const all = loadProgress();
  delete all[karteId];
  localStorage.setItem(KEY, JSON.stringify(all));
}

/**
 * Setzt den gesamten Fortschritt zurück.
 */
export function resetAll() {
  localStorage.removeItem(KEY);
}
```

- [ ] **Schritt 2: Storage manuell testen**

Konsole (F12):
```js
import('./js/storage.js').then(m => {
  m.saveCardProgress('k-001', { intervall: 1, wiederholungen: 1, easeFactor: 2.5, naechsteWiederholung: Date.now() + 86400000 });
  console.log(m.loadProgress()); // Soll { 'k-001': { ... } } zeigen
  m.resetCard('k-001');
  console.log(m.loadProgress()); // Soll {} sein
});
```

---

## Task 4: Dashboard-View (`js/dashboard.js`)

**Files:**
- Create: `js/dashboard.js`

- [ ] **Schritt 1: `js/dashboard.js` erstellen**

```js
// js/dashboard.js
import { loadProgress } from './storage.js';
import { getFaelligeKarten } from './sm2.js';

/**
 * Rendert das Dashboard für ein Thema in #main.
 * @param {object} thema - Thema-Objekt aus cards.json
 * @param {{ onMode: Function }} callbacks
 */
export function renderDashboard(thema, { onMode }) {
  const progress = loadProgress();
  const faellig = getFaelligeKarten(thema, progress);
  const gesamt = thema.karten.length;
  const gelernt = thema.karten.filter(k => (progress[k.id]?.wiederholungen ?? 0) >= 3).length;
  const prozent = gesamt ? Math.round((gelernt / gesamt) * 100) : 0;

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="dashboard">
      <h1 class="dashboard-title">${thema.name}</h1>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${gesamt}</div>
          <div class="stat-label">Karten gesamt</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${gelernt}</div>
          <div class="stat-label">Gelernt</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${faellig.length}</div>
          <div class="stat-label">Heute fällig</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${prozent}%</div>
          <div class="stat-label">Fortschritt</div>
        </div>
      </div>

      <div class="progress-section">
        <div class="progress-bar large">
          <div class="progress-bar-fill" style="width:${prozent}%"></div>
        </div>
      </div>

      <div class="mode-buttons">
        <button class="btn btn-primary" id="btn-flip">Karteikarte</button>
        <button class="btn btn-secondary" id="btn-mc">Multiple Choice</button>
        <button class="btn btn-secondary" id="btn-freitext">Freitext</button>
      </div>

      ${faellig.length === 0
        ? '<p class="no-due">Keine fälligen Karten — komm morgen wieder!</p>'
        : `<p class="due-hint">${faellig.length} Karte(n) warten auf dich.</p>`}
    </div>
  `;

  document.getElementById('btn-flip').addEventListener('click', () => onMode(thema, 'flip'));
  document.getElementById('btn-mc').addEventListener('click', () => onMode(thema, 'mc'));
  document.getElementById('btn-freitext').addEventListener('click', () => onMode(thema, 'freitext'));
}
```

- [ ] **Schritt 2: CSS für Dashboard hinzufügen** (in `style.css` anhängen)

```css
/* Dashboard */
.dashboard { max-width: 700px; }
.dashboard-title { font-size: 1.8rem; font-weight: 700; margin-bottom: 1.5rem; }

.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; text-align: center; }
.stat-value { font-size: 2rem; font-weight: 700; color: var(--accent); }
.stat-label { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem; }

.progress-section { margin-bottom: 2rem; }
.progress-bar.large { height: 10px; background: var(--border); border-radius: 5px; }

.mode-buttons { display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.no-due, .due-hint { color: var(--text-muted); font-size: 0.9rem; }
```

- [ ] **Schritt 3: Im Browser prüfen**

Seite neu laden. Dashboard für "WBL" soll erscheinen mit 4 Stat-Karten und 3 Buttons. Kein Fehler in der Konsole.

---

## Task 5: Flip-Karten-Modus (`js/flip.js`)

**Files:**
- Create: `js/flip.js`

- [ ] **Schritt 1: `js/flip.js` erstellen**

```js
// js/flip.js
import { loadProgress, saveCardProgress } from './storage.js';
import { berechneIntervall, getFaelligeKarten } from './sm2.js';

export function renderFlip(thema, { onDone }) {
  const progress = loadProgress();
  const stapel = getFaelligeKarten(thema, progress);

  if (stapel.length === 0) {
    document.getElementById('main').innerHTML = `
      <div class="session-done">
        <h2>Alle Karten für heute erledigt!</h2>
        <button class="btn btn-primary" id="btn-back">Zurück</button>
      </div>`;
    document.getElementById('btn-back').addEventListener('click', onDone);
    return;
  }

  let index = 0;
  let aufgedeckt = false;

  function renderKarte() {
    const karte = stapel[index];
    aufgedeckt = false;
    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="card-session">
        <div class="session-header">
          <button class="btn btn-secondary" id="btn-abbrechen">Abbrechen</button>
          <span class="session-count">${index + 1} / ${stapel.length}</span>
        </div>
        <div class="flashcard" id="flashcard">
          <div class="flashcard-front">
            <div class="karte-label">Frage</div>
            <div class="karte-text">${karte.frage}</div>
            <button class="btn btn-primary" id="btn-aufdecken">Antwort aufdecken</button>
          </div>
          <div class="flashcard-back hidden" id="karte-back">
            <div class="karte-label">Antwort</div>
            <div class="karte-text">${karte.antwort}</div>
            <div class="bewertung-buttons">
              <button class="btn btn-wrong" id="btn-falsch">Nicht gewusst</button>
              <button class="btn btn-correct" id="btn-richtig">Gewusst</button>
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById('btn-abbrechen').addEventListener('click', onDone);
    document.getElementById('btn-aufdecken').addEventListener('click', () => {
      document.querySelector('.flashcard-front').classList.add('hidden');
      document.getElementById('karte-back').classList.remove('hidden');
    });
    document.getElementById('btn-falsch').addEventListener('click', () => bewerte(karte, 0));
    document.getElementById('btn-richtig').addEventListener('click', () => bewerte(karte, 1));
  }

  function bewerte(karte, bewertung) {
    const progress = loadProgress();
    const neuerState = berechneIntervall(progress[karte.id] || {}, bewertung);
    saveCardProgress(karte.id, neuerState);
    index++;
    if (index >= stapel.length) {
      document.getElementById('main').innerHTML = `
        <div class="session-done">
          <h2>Session abgeschlossen! ✓</h2>
          <button class="btn btn-primary" id="btn-back">Zurück zum Dashboard</button>
        </div>`;
      document.getElementById('btn-back').addEventListener('click', onDone);
    } else {
      renderKarte();
    }
  }

  renderKarte();
}
```

- [ ] **Schritt 2: CSS für Karten hinzufügen** (in `style.css` anhängen)

```css
/* Karten-Session */
.card-session { max-width: 620px; margin: 0 auto; }
.session-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.session-count { font-size: 0.9rem; color: var(--text-muted); }

.flashcard { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 2.5rem; min-height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.karte-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 1rem; }
.karte-text { font-size: 1.2rem; line-height: 1.6; margin-bottom: 2rem; }
.bewertung-buttons { display: flex; gap: 1rem; }

.hidden { display: none !important; }
.session-done { text-align: center; margin-top: 4rem; }
.session-done h2 { font-size: 1.6rem; margin-bottom: 1.5rem; }
```

- [ ] **Schritt 3: Im Browser testen**

Klick auf "Karteikarte". Karte erscheint mit Frage. Klick auf "Antwort aufdecken" zeigt Antwort. Klick auf "Gewusst"/"Nicht gewusst" geht zur nächsten Karte oder zeigt Abschluss.

---

## Task 6: Multiple-Choice-Modus (`js/multiplechoice.js`)

**Files:**
- Create: `js/multiplechoice.js`

- [ ] **Schritt 1: `js/multiplechoice.js` erstellen**

```js
// js/multiplechoice.js
import { loadProgress, saveCardProgress } from './storage.js';
import { berechneIntervall, getFaelligeKarten } from './sm2.js';

export function renderMultipleChoice(thema, { onDone }) {
  const progress = loadProgress();
  const stapel = getFaelligeKarten(thema, progress);

  if (stapel.length === 0) {
    document.getElementById('main').innerHTML = `
      <div class="session-done">
        <h2>Alle Karten für heute erledigt!</h2>
        <button class="btn btn-primary" id="btn-back">Zurück</button>
      </div>`;
    document.getElementById('btn-back').addEventListener('click', onDone);
    return;
  }

  let index = 0;

  function renderFrage() {
    const karte = stapel[index];
    const optionen = shuffle([karte.antwort, ...karte.falschantworten]);
    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="card-session">
        <div class="session-header">
          <button class="btn btn-secondary" id="btn-abbrechen">Abbrechen</button>
          <span class="session-count">${index + 1} / ${stapel.length}</span>
        </div>
        <div class="flashcard mc-card">
          <div class="karte-label">Multiple Choice</div>
          <div class="karte-text">${karte.frage}</div>
          <div class="mc-optionen" id="mc-optionen">
            ${optionen.map((o, i) => `
              <button class="mc-option" data-index="${i}" data-richtig="${o === karte.antwort}">
                ${String.fromCharCode(65 + i)}) ${o}
              </button>`).join('')}
          </div>
        </div>
      </div>`;

    document.getElementById('btn-abbrechen').addEventListener('click', onDone);
    document.querySelectorAll('.mc-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const richtig = btn.dataset.richtig === 'true';
        // Alle Buttons deaktivieren + einfärben
        document.querySelectorAll('.mc-option').forEach(b => {
          b.disabled = true;
          if (b.dataset.richtig === 'true') b.classList.add('mc-correct');
          else b.classList.add('mc-wrong');
        });
        setTimeout(() => {
          const p = loadProgress();
          const neuerState = berechneIntervall(p[karte.id] || {}, richtig ? 1 : 0);
          saveCardProgress(karte.id, neuerState);
          index++;
          if (index >= stapel.length) {
            document.getElementById('main').innerHTML = `
              <div class="session-done">
                <h2>Session abgeschlossen! ✓</h2>
                <button class="btn btn-primary" id="btn-back">Zurück zum Dashboard</button>
              </div>`;
            document.getElementById('btn-back').addEventListener('click', onDone);
          } else {
            renderFrage();
          }
        }, 1200);
      });
    });
  }

  renderFrage();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
```

- [ ] **Schritt 2: MC-CSS hinzufügen** (in `style.css` anhängen)

```css
/* Multiple Choice */
.mc-card { align-items: stretch; }
.mc-optionen { display: flex; flex-direction: column; gap: 0.75rem; width: 100%; }
.mc-option {
  padding: 0.8rem 1.2rem; border: 2px solid var(--border); border-radius: 10px;
  background: var(--surface2); color: var(--text); font-size: 0.95rem;
  text-align: left; cursor: pointer; transition: border-color 0.15s;
}
.mc-option:hover:not(:disabled) { border-color: var(--accent); }
.mc-option.mc-correct { border-color: var(--correct); background: color-mix(in srgb, var(--correct) 20%, transparent); }
.mc-option.mc-wrong { border-color: var(--wrong); background: color-mix(in srgb, var(--wrong) 15%, transparent); }
.mc-option:disabled { cursor: default; }
```

- [ ] **Schritt 3: Im Browser testen**

Klick auf "Multiple Choice". Frage erscheint mit 4 Antwortoptionen. Richtige Auswahl wird grün, falsche rot. Nach 1,2 Sekunden nächste Frage.

---

## Task 7: Freitext-Modus (`js/freetext.js`)

**Files:**
- Create: `js/freetext.js`

- [ ] **Schritt 1: `js/freetext.js` erstellen**

```js
// js/freetext.js
import { loadProgress, saveCardProgress } from './storage.js';
import { berechneIntervall, getFaelligeKarten } from './sm2.js';

export function renderFreetext(thema, { onDone }) {
  const progress = loadProgress();
  const stapel = getFaelligeKarten(thema, progress);

  if (stapel.length === 0) {
    document.getElementById('main').innerHTML = `
      <div class="session-done">
        <h2>Alle Karten für heute erledigt!</h2>
        <button class="btn btn-primary" id="btn-back">Zurück</button>
      </div>`;
    document.getElementById('btn-back').addEventListener('click', onDone);
    return;
  }

  let index = 0;

  function renderFrage() {
    const karte = stapel[index];
    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="card-session">
        <div class="session-header">
          <button class="btn btn-secondary" id="btn-abbrechen">Abbrechen</button>
          <span class="session-count">${index + 1} / ${stapel.length}</span>
        </div>
        <div class="flashcard ft-card">
          <div class="karte-label">Freitext</div>
          <div class="karte-text">${karte.frage}</div>
          <textarea class="ft-input" id="ft-input" placeholder="Deine Antwort..." rows="4"></textarea>
          <button class="btn btn-primary" id="btn-pruefen">Prüfen</button>
        </div>
      </div>`;

    document.getElementById('btn-abbrechen').addEventListener('click', onDone);
    document.getElementById('btn-pruefen').addEventListener('click', () => {
      const eingabe = document.getElementById('ft-input').value.toLowerCase();
      const treffer = karte.stichworte.filter(s => eingabe.includes(s.toLowerCase()));
      const minTreffer = Math.max(1, Math.floor(karte.stichworte.length * 0.5));
      const richtig = treffer.length >= minTreffer;

      const karte_el = document.querySelector('.ft-card');
      karte_el.innerHTML += `
        <div class="ft-feedback ${richtig ? 'ft-correct' : 'ft-wrong'}">
          ${richtig ? '✓ Richtig!' : '✗ Nicht ganz.'}
          <div class="ft-musterantwort">
            <strong>Musterantwort:</strong> ${karte.antwort}
          </div>
          <div class="ft-stichworte">
            Erkannte Stichworte: ${treffer.length > 0 ? treffer.join(', ') : 'keine'}
            (${treffer.length}/${karte.stichworte.length})
          </div>
        </div>
        <div class="bewertung-buttons" style="margin-top:1rem;">
          <button class="btn btn-wrong" id="btn-falsch">Doch nicht gewusst</button>
          <button class="btn btn-correct" id="btn-richtig-ft">Weiter</button>
        </div>`;

      document.getElementById('btn-pruefen').remove();
      document.getElementById('ft-input').disabled = true;

      const weiter = (bewertung) => {
        const p = loadProgress();
        const neuerState = berechneIntervall(p[karte.id] || {}, bewertung);
        saveCardProgress(karte.id, neuerState);
        index++;
        if (index >= stapel.length) {
          document.getElementById('main').innerHTML = `
            <div class="session-done">
              <h2>Session abgeschlossen! ✓</h2>
              <button class="btn btn-primary" id="btn-back">Zurück zum Dashboard</button>
            </div>`;
          document.getElementById('btn-back').addEventListener('click', onDone);
        } else {
          renderFrage();
        }
      };

      document.getElementById('btn-falsch').addEventListener('click', () => weiter(0));
      document.getElementById('btn-richtig-ft').addEventListener('click', () => weiter(richtig ? 1 : 0));
    });
  }

  renderFrage();
}
```

- [ ] **Schritt 2: Freitext-CSS hinzufügen** (in `style.css` anhängen)

```css
/* Freitext */
.ft-card { align-items: stretch; gap: 1rem; }
.ft-input {
  width: 100%; padding: 0.8rem; border: 2px solid var(--border); border-radius: 10px;
  background: var(--bg); color: var(--text); font-size: 1rem; resize: vertical;
  font-family: inherit;
}
.ft-input:focus { outline: none; border-color: var(--accent); }
.ft-feedback { padding: 1rem; border-radius: 10px; font-weight: 600; }
.ft-correct { background: color-mix(in srgb, var(--correct) 20%, transparent); color: var(--correct); }
.ft-wrong { background: color-mix(in srgb, var(--wrong) 15%, transparent); color: var(--wrong); }
.ft-musterantwort { font-weight: 400; color: var(--text); margin-top: 0.5rem; font-size: 0.9rem; }
.ft-stichworte { font-weight: 400; color: var(--text-muted); font-size: 0.8rem; margin-top: 0.3rem; }
```

- [ ] **Schritt 3: Im Browser testen**

Klick auf "Freitext". Frage erscheint mit Textfeld. Antwort eingeben, "Prüfen" klicken. Feedback zeigt Stichwort-Treffer und Musterantwort. Weiter-Button geht zur nächsten Karte.

---

## Task 8: Abschluss-Verifikation

- [ ] **Schritt 1: Vollständiger Durchlauf testen**

1. `index.html` im Browser öffnen
2. "WBL" in der Sidebar anklicken → Dashboard erscheint
3. "Karteikarte" → Karte durchlaufen, "Gewusst" klicken → zurück zum Dashboard
4. Fortschritt in der Sidebar hat sich erhöht
5. "Multiple Choice" → Frage beantworten → Feedback, Weiter
6. "Freitext" → Antwort eingeben → Feedback
7. Browser schließen, wieder öffnen → Fortschritt noch vorhanden
8. Theme-Toggle (☀️) wechselt zu Hell-Modus und zurück

- [ ] **Schritt 2: Neues Thema einbinden**

Wenn Claude eine neue `cards.json` mit `thema-elektrotechnik` liefert:
1. Alte `cards.json` ersetzen (Fortschritt bleibt erhalten, da in localStorage)
2. Seite neu laden → neues Thema erscheint in der Sidebar

- [ ] **Schritt 3: Commit**

```bash
git init
git add index.html style.css cards.json js/
git commit -m "feat: AP2 Karteikarten-App mit Flip, MC, Freitext und SM-2"
```
