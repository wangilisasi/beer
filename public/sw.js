const CACHE_NAME = 'bier-tracker-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('Service Worker: Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle API requests (network first, cache fallback)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response for cache
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Return cached version if available
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Return offline response for API calls
            return new Response(
              JSON.stringify({ 
                error: 'Offline - cached data not available',
                offline: true 
              }),
              {
                status: 503,
                headers: { 'Content-Type': 'application/json' }
              }
            );
          });
        })
    );
    return;
  }

  // Handle page requests (cache first, network fallback)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request)
          .then((response) => {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
            return response;
          })
          .catch(() => {
            // Return offline page
            return caches.match('/offline');
          });
      })
    );
    return;
  }

  // Handle static assets (cache first)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      });
    })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'sync-expenses') {
    event.waitUntil(syncOfflineExpenses());
  }
  
  if (event.tag === 'sync-beers') {
    event.waitUntil(syncOfflineBeers());
  }
});

// Sync functions for offline data
async function syncOfflineExpenses() {
  try {
    // Get offline expenses from IndexedDB
    const offlineExpenses = await getOfflineExpenses();
    
    for (const expense of offlineExpenses) {
      try {
        const response = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(expense.data)
        });
        
        if (response.ok) {
          await removeOfflineExpense(expense.id);
          console.log('Synced offline expense:', expense.id);
        }
      } catch (error) {
        console.error('Failed to sync expense:', expense.id, error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function syncOfflineBeers() {
  try {
    // Get offline beers from IndexedDB
    const offlineBeers = await getOfflineBeers();
    
    for (const beer of offlineBeers) {
      try {
        const response = await fetch('/api/beers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(beer.data)
        });
        
        if (response.ok) {
          await removeOfflineBeer(beer.id);
          console.log('Synced offline beer:', beer.id);
        }
      } catch (error) {
        console.error('Failed to sync beer:', beer.id, error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// IndexedDB helper functions (simplified)
async function getOfflineExpenses() {
  // TODO: Implement IndexedDB storage for offline expenses
  return [];
}

async function removeOfflineExpense(id) {
  // TODO: Implement IndexedDB removal
}

async function getOfflineBeers() {
  // TODO: Implement IndexedDB storage for offline beers
  return [];
}

async function removeOfflineBeer(id) {
  // TODO: Implement IndexedDB removal
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      data: data.data || {}
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
}); 