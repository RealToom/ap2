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
      <h1 class="dashboard-title"></h1>

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

  // XSS fix: set title via textContent, not innerHTML
  document.querySelector('.dashboard-title').textContent = thema.name;

  document.getElementById('btn-flip').addEventListener('click', () => onMode(thema, 'flip'));
  document.getElementById('btn-mc').addEventListener('click', () => onMode(thema, 'mc'));
  document.getElementById('btn-freitext').addEventListener('click', () => onMode(thema, 'freitext'));
}
