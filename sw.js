// Franceska Venzon Service Worker - Cache-First for Ultra-Fast Delivery
const CACHE_NAME = 'fv-confeitaria-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './cardapio.json',
  './proposta.html',
  './assets/logo.svg',
  './assets/logo-white.svg',
  './assets/sobremesa_1.jpg',
  './assets/sobremesa_2.jpg',
  './assets/sobremesa_3.jpg',
  './assets/sobremesa_4.jpg',
  './assets/sobremesa_5.jpg',
  './assets/sobremesa_6.jpg',
  './assets/sobremesa_7.jpg',
  './assets/bolo_chocolate.jpg',
  './assets/cafe_especial.jpg',
  './assets/salgado_empanada.jpg',
  './assets/interior_confeitaria.jpg',
  './assets/interior_salao.jpg',
  './assets/pratos_vitrine.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
