workbox.setConfig({
    debug: false,
});
 
workbox.skipWaiting(); 
workbox.clientsClaim();

workbox.core.setCacheNameDetails({
    prefix: 'csl',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime'
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    new RegExp('https://some-fancy-api.com'),
    workbox.strategies.networkFirst({
        cacheName: 'api',
    }),
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
            }),
        ],
    }),
);

console.log(123)
