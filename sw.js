const CACHE = 'ap2-v3';
const FILES = [
  './',
  './index.html',
  './karten.html',
  './wallbox.html',
  './hato.html',
  './style.css',
  './manifest.json',
  './js/app.js',
  './js/cards-data.js',
  './js/dashboard.js',
  './js/flip.js',
  './js/freetext.js',
  './js/multiplechoice.js',
  './js/sm2.js',
  './js/storage.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
