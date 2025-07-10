'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAProvider({ children }: { children: React.ReactNode }) {
  const [isOffline, setIsOffline] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Handle offline/online status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial online status
    setIsOffline(!navigator.onLine);

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);

    // Handle app installed
    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsInstallable(false);
      console.log('PWA was installed');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const showUpdateNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('App Update Available', {
        body: 'A new version of BierTracker is available. Refresh to update.',
        icon: '/icon-192x192.png',
      });
    }
  };

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setInstallPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      console.error('Install prompt failed:', error);
    }
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      console.log('Notification permission:', permission);
    }
  };

  return (
    <>
      {children}
      
      {/* Offline indicator */}
      {isOffline && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
          <span className="text-sm">📡 You're offline - some features may be limited</span>
        </div>
      )}

      {/* Install prompt */}
      {isInstallable && (
        <div className="fixed bottom-4 left-4 right-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg z-50 md:left-auto md:right-4 md:w-80">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Install BierTracker</h3>
              <p className="text-sm opacity-90">Install the app for a better experience</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setIsInstallable(false)}
                className="text-sm px-3 py-1 bg-amber-700 rounded hover:bg-amber-800"
              >
                Later
              </button>
              <button
                onClick={handleInstallClick}
                className="text-sm px-3 py-1 bg-white text-amber-600 rounded hover:bg-gray-100"
              >
                Install
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification permission prompt */}
      <div className="hidden">
        <button onClick={requestNotificationPermission}>
          Enable Notifications
        </button>
      </div>
    </>
  );
} 