const CACHE_NAME = "complyright-v1";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./style.css",
                "./app.js",
                "./logo.png"
            ]);
        })
    );
});