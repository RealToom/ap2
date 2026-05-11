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

    // Optionen als Objekte aufbauen: {text, erklaerung, isCorrect}
    const falsch = (karte.falschantworten || []).map(f =>
      typeof f === 'object'
        ? { text: f.text, erklaerung: f.erklaerung, isCorrect: false }
        : { text: f, erklaerung: 'Diese Antwort ist falsch.', isCorrect: false }
    );
    const richtig = {
      text: karte.antwort_mc || karte.antwort,
      erklaerung: karte.erklaerung || '✓ Das ist die richtige Antwort.',
      isCorrect: true
    };
    const optionen = shuffle([richtig, ...falsch]);

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
              <div class="mc-option-wrap" data-i="${i}">
                <button class="mc-option" data-index="${i}">
                  ${String.fromCharCode(65 + i)}) <span class="mc-option-text"></span>
                </button>
                <div class="mc-erklaerung hidden" id="mc-erkl-${i}"></div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;

    document.getElementById('mc-frage').textContent = karte.frage;
    document.querySelectorAll('.mc-option-text').forEach((span, i) => {
      span.textContent = optionen[i].text;
    });

    document.getElementById('btn-abbrechen').addEventListener('click', onDone);

    document.querySelectorAll('.mc-option').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const gewählt = optionen[i];

        document.querySelectorAll('.mc-option').forEach((b, j) => {
          b.disabled = true;
          const opt = optionen[j];
          if (opt.isCorrect) b.classList.add('mc-correct');
          else b.classList.add('mc-wrong');

          const erkl = document.getElementById('mc-erkl-' + j);
          erkl.classList.remove('hidden');
          if (opt.isCorrect) {
            erkl.className = 'mc-erklaerung mc-erkl-correct';
            erkl.textContent = '✓ ' + opt.erklaerung;
          } else {
            erkl.className = 'mc-erklaerung mc-erkl-wrong';
            erkl.textContent = '✗ ' + opt.erklaerung;
          }
        });

        const mcCard = document.querySelector('.mc-card');
        const weiterBtn = document.createElement('button');
        weiterBtn.className = 'btn btn-primary mc-weiter';
        weiterBtn.textContent = 'Weiter →';
        mcCard.appendChild(weiterBtn);

        weiterBtn.addEventListener('click', () => {
          const p = loadProgress();
          const neuerState = berechneIntervall(p[karte.id] || {}, gewählt.isCorrect ? 1 : 0);
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
        });
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
