// js/sm2.js

/**
 * Berechnet das neue SM-2-Intervall nach einer Antwort.
 * @param {object} cardState - { intervall, wiederholungen, easeFactor } oder {}
 * @param {number} bewertung - 0 (falsch) oder 1 (richtig)
 * @returns {object} Neuer State: { intervall, wiederholungen, easeFactor, naechsteWiederholung }
 * Note: The storage layer adds `letzteAntwort` when persisting — this function
 * only returns the SM-2 scheduling fields.
 */
export function berechneIntervall(cardState, bewertung, jetzt = Date.now()) {
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

  const naechsteWiederholung = jetzt + intervall * 24 * 60 * 60 * 1000;
  return { intervall, wiederholungen, easeFactor, naechsteWiederholung };
}

/**
 * Gibt zurück wie viele Karten heute fällig sind.
 * @param {Array} alleKarten - Alle Karten aus allen Themen
 * @param {object} progress - { [karteId]: cardState }
 * @returns {number}
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
  const faellig = (thema.karten ?? []).filter(k => {
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
export function getStreak(progress, heute = new Date()) {
  const gelernteTageDates = new Set(
    Object.values(progress)
      .map(p => p.letzteAntwort)
      .filter(Boolean)
      .map(ts => new Date(ts).toDateString())
  );

  let streak = 0;
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
