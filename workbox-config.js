module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,ico,html,js,css}"
  ],
  "swDest": "build/sw.js",
  "clientsClaim": true,
	"skipWaiting": true,
	"globIgnores": ["**/firebase-messaging-sw.js"],
	"runtimeCaching": [{
    "urlPattern": "/.jpg$/",
		"handler": "cacheFirst",
		"options": {
			"cacheName": "my-image-cache",
			"expiration": {
				"maxEntries": 50,
				"maxAgeSeconds": 2592000
			}
		}
	}]
};
