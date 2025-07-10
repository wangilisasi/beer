export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📡</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">You're Offline</h1>
          <p className="text-gray-600">
            It looks like you've lost your internet connection. Don't worry, you can still use some features of BierTracker!
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 mb-2">What you can do offline:</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• View previously loaded beers and expenses</li>
              <li>• Add new items (they'll sync when online)</li>
              <li>• Browse cached pages</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Limited features:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Real-time data sync</li>
              <li>• New data from server</li>
              <li>• Image uploads</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors"
          >
            ← Go Back
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            🏠 Go to Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="w-full text-sm text-gray-600 py-2 hover:text-gray-800 transition-colors"
          >
            🔄 Try to Reconnect
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Your offline data will automatically sync when you're back online.
          </p>
        </div>
      </div>
    </div>
  );
} 