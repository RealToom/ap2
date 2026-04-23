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
