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
          <div class="karte-text" id="ft-frage"></div>
          <textarea class="ft-input" id="ft-input" placeholder="Deine Antwort..." rows="4"></textarea>
          <button class="btn btn-primary" id="btn-pruefen">Prüfen</button>
        </div>
      </div>`;

    // XSS-safe: set question text via textContent
    document.getElementById('ft-frage').textContent = karte.frage;

    document.getElementById('btn-abbrechen').addEventListener('click', onDone);
    document.getElementById('btn-pruefen').addEventListener('click', () => {
      const eingabe = document.getElementById('ft-input').value.toLowerCase();
      const treffer = karte.stichworte.filter(s => eingabe.includes(s.toLowerCase()));
      const minTreffer = Math.max(1, Math.floor(karte.stichworte.length * 0.5));
      const richtig = treffer.length >= minTreffer;

      // Show feedback below the textarea
      const feedbackDiv = document.createElement('div');
      feedbackDiv.className = 'ft-feedback ' + (richtig ? 'ft-correct' : 'ft-wrong');

      const resultText = document.createElement('div');
      resultText.textContent = richtig ? '✓ Richtig!' : '✗ Nicht ganz.';
      resultText.style.fontWeight = '600';

      const musterDiv = document.createElement('div');
      musterDiv.className = 'ft-musterantwort';
      const musterLabel = document.createElement('strong');
      musterLabel.textContent = 'Musterantwort: ';
      const musterText = document.createTextNode(''); // will set below
      musterDiv.appendChild(musterLabel);
      musterDiv.appendChild(musterText);

      const stichworteDiv = document.createElement('div');
      stichworteDiv.className = 'ft-stichworte';
      // Set text safely
      stichworteDiv.textContent = `Erkannte Stichworte: ${treffer.length > 0 ? treffer.join(', ') : 'keine'} (${treffer.length}/${karte.stichworte.length})`;

      feedbackDiv.appendChild(resultText);
      feedbackDiv.appendChild(musterDiv);
      feedbackDiv.appendChild(stichworteDiv);

      // XSS-safe: set musterantwort via textNode
      musterText.nodeValue = karte.antwort;

      // Add action buttons
      const actionDiv = document.createElement('div');
      actionDiv.className = 'bewertung-buttons';
      actionDiv.style.marginTop = '1rem';

      const btnFalsch = document.createElement('button');
      btnFalsch.className = 'btn btn-wrong';
      btnFalsch.textContent = 'Doch nicht gewusst';

      const btnWeiter = document.createElement('button');
      btnWeiter.className = 'btn btn-correct';
      btnWeiter.textContent = 'Weiter';

      actionDiv.appendChild(btnFalsch);
      actionDiv.appendChild(btnWeiter);

      const ftCard = document.querySelector('.ft-card');
      document.getElementById('btn-pruefen').remove();
      document.getElementById('ft-input').disabled = true;
      ftCard.appendChild(feedbackDiv);
      ftCard.appendChild(actionDiv);

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

      btnFalsch.addEventListener('click', () => weiter(0));
      btnWeiter.addEventListener('click', () => weiter(richtig ? 1 : 0));
    });
  }

  renderFrage();
}
