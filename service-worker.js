/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a615c7d0131435a5ecddf9a838471a3e"
  },
  {
    "url": "assets/css/0.styles.b1f0db1c.css",
    "revision": "30946b3fef575cfb9cce35eb0c54db33"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c7593f6d.js",
    "revision": "0c5ce24574a762c3adaf6f92ffbf4bba"
  },
  {
    "url": "assets/js/11.6c035bb0.js",
    "revision": "115bed9c0c22599c31a81d6fe1b19113"
  },
  {
    "url": "assets/js/12.6e9a25b9.js",
    "revision": "e85b3ef687d562d742925f35ce610a7d"
  },
  {
    "url": "assets/js/13.9f79441d.js",
    "revision": "d008d26f7f5ec03bceaf92188c4997d8"
  },
  {
    "url": "assets/js/14.1eb4fa50.js",
    "revision": "36bce259fca5b031d2d963cad7d76994"
  },
  {
    "url": "assets/js/2.f7317857.js",
    "revision": "89347cf1d0017d1217bac0eb781db72b"
  },
  {
    "url": "assets/js/3.e3bb3f95.js",
    "revision": "618ab8d63344504b3a3d7dee59b05885"
  },
  {
    "url": "assets/js/4.53b5279b.js",
    "revision": "daf17ba7111484b7fbb8975a4a2578ee"
  },
  {
    "url": "assets/js/5.d8ba811d.js",
    "revision": "456ef8afe352acd520f2f4aadd7d5c27"
  },
  {
    "url": "assets/js/6.0c58296a.js",
    "revision": "0510945c8984f282b6b7c918c9abc6ee"
  },
  {
    "url": "assets/js/7.1b710f61.js",
    "revision": "a11188ba96eda4aba00129dbee4a64dd"
  },
  {
    "url": "assets/js/8.85468a1d.js",
    "revision": "9a7ce7cfd6ee5c987e3a031183479417"
  },
  {
    "url": "assets/js/9.5268e8e8.js",
    "revision": "7d184fc5d50ef6460914c8959ca35a66"
  },
  {
    "url": "assets/js/app.4320b2ce.js",
    "revision": "4ca47e44547c1b7c885ddcf725aaa856"
  },
  {
    "url": "egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "img1.jpg",
    "revision": "599766f0c497c246bf4689c21e89f242"
  },
  {
    "url": "index.html",
    "revision": "0901f3fece0f4b42fe9acc22c369034b"
  },
  {
    "url": "pages/folder1/test1.html",
    "revision": "c7b44c5658addfb60803a28e5bc273a3"
  },
  {
    "url": "pages/folder1/test2.html",
    "revision": "00dcc7e907b305956b5c4b5f5f202127"
  },
  {
    "url": "pages/folder1/test3.html",
    "revision": "5311032416a8e3c4fbf37dd70ac252a5"
  },
  {
    "url": "pages/folder1/test6.html",
    "revision": "33014a27548d3ccf235d1111e4fb5769"
  },
  {
    "url": "pages/folder1/test7.html",
    "revision": "fa40f4e961c71eb208875626f4651540"
  },
  {
    "url": "pages/folder2/test4.html",
    "revision": "c7e4a87ff3442cd89860e75f6d263cc2"
  },
  {
    "url": "pages/folder2/test5.html",
    "revision": "716710fa1ba834e3a752e9848b824d8e"
  },
  {
    "url": "pages/js/tcx1.html",
    "revision": "0e3eacfcafc3a72c2a25232544c99666"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
