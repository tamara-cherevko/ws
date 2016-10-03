if ('serviceWorker' in window.navigator) {
    window.navigator.serviceWorker.
    register('./sw.js').then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).
    catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
    });
}

var urlsToCache = ['/app.js'];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});