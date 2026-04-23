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

  function renderKarte() {
    const karte = stapel[index];
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
            <div class="karte-text" id="karte-frage"></div>
            <button class="btn btn-primary" id="btn-aufdecken">Antwort aufdecken</button>
          </div>
          <div class="flashcard-back hidden" id="karte-back">
            <div class="karte-label">Antwort</div>
            <div class="karte-text" id="karte-antwort"></div>
            <div class="bewertung-buttons">
              <button class="btn btn-wrong" id="btn-falsch">Nicht gewusst</button>
              <button class="btn btn-correct" id="btn-richtig">Gewusst</button>
            </div>
          </div>
        </div>
      </div>`;

    // XSS-safe: set text content after innerHTML
    document.getElementById('karte-frage').textContent = karte.frage;
    document.getElementById('karte-antwort').textContent = karte.antwort;

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
