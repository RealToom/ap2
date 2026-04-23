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
          <div class="karte-text" id="mc-frage"></div>
          <div class="mc-optionen" id="mc-optionen">
            ${optionen.map((o, i) => `
              <button class="mc-option" data-index="${i}" data-richtig="${o === karte.antwort}">
                ${String.fromCharCode(65 + i)}) <span class="mc-option-text"></span>
              </button>`).join('')}
          </div>
        </div>
      </div>`;

    // XSS-safe: set all text content after innerHTML
    document.getElementById('mc-frage').textContent = karte.frage;
    document.querySelectorAll('.mc-option-text').forEach((span, i) => {
      span.textContent = optionen[i];
    });

    document.getElementById('btn-abbrechen').addEventListener('click', onDone);
    document.querySelectorAll('.mc-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const richtig = btn.dataset.richtig === 'true';
        // Disable all buttons and color them
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
