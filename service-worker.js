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
    "revision": "d402ece7ad72f2c68b14386d9ff25ff7"
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
    "url": "assets/js/10.3be71348.js",
    "revision": "8d7f0eaac7bf65dd2ad5bb5f286d06bb"
  },
  {
    "url": "assets/js/11.6d47dfbc.js",
    "revision": "58c2d38e35f2495a70485a7adc02529d"
  },
  {
    "url": "assets/js/12.5df0d11c.js",
    "revision": "6b5e17e318be01a36c604122d9944c21"
  },
  {
    "url": "assets/js/2.41d047a1.js",
    "revision": "7ad6c818c9ba8bb9ef173b8196212c0c"
  },
  {
    "url": "assets/js/3.34fb6675.js",
    "revision": "52e0ee980ce498b40922d337fe430971"
  },
  {
    "url": "assets/js/4.91991037.js",
    "revision": "22d9302d118724a1b7a572d43651dc60"
  },
  {
    "url": "assets/js/5.44c965f5.js",
    "revision": "1eb4025fc9e5012e4505291a8001eb63"
  },
  {
    "url": "assets/js/6.1a6cb902.js",
    "revision": "aef25eaf4902c842c3aed32da2f61d6e"
  },
  {
    "url": "assets/js/7.e26d23b8.js",
    "revision": "d56b1fd00cac50447393cd212edad0f0"
  },
  {
    "url": "assets/js/8.bf56a909.js",
    "revision": "c800d73c4c0b9e3b8814ef1bcf5cb267"
  },
  {
    "url": "assets/js/9.057cd604.js",
    "revision": "7b131cf5591c2b49f4be4606405a597e"
  },
  {
    "url": "assets/js/app.b446f7a6.js",
    "revision": "cf9f1b6058ced416df3cd265db676eea"
  },
  {
    "url": "egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "index.html",
    "revision": "15ae59d51d2cc620b143d240d4f95069"
  },
  {
    "url": "pages/folder1/test1.html",
    "revision": "b0b437a3a1de4818c9bdd82268bce478"
  },
  {
    "url": "pages/folder1/test2.html",
    "revision": "7c46add94992561f0f6dd1de55a8e5f0"
  },
  {
    "url": "pages/folder1/test3.html",
    "revision": "6245552b2195d5d1e471f5183867c944"
  },
  {
    "url": "pages/folder2/test4.html",
    "revision": "983fecdf73747847c9aa0a4095940350"
  },
  {
    "url": "pages/folder2/test5.html",
    "revision": "eadbc2fc0d810889965b3938250371e3"
  },
  {
    "url": "pages/js/tcx1.html",
    "revision": "2009e00dfeda2ee8eb6a9d92ad838339"
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
