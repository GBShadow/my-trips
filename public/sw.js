if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,t)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DFKvhfdvxSiw-1NK9bDK8/_buildManifest.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/DFKvhfdvxSiw-1NK9bDK8/_ssgManifest.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/0b7b90cd.71129a5e4ef3148753a4.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/12.9593a7c3c435a0287773.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/2dd8024639213757075864c624e37c2da904a9c5.a79bd759dd81f3d16e2c.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/commons.e87c5c04d778f082a487.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/framework.e48280befedc86156291.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/main-13fcafee96dbb0f20301.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/pages/%5Bslug%5D-861b2d8e9cfd264ed613.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/pages/_app-cfbf7f10fcd90837dd5e.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/pages/_error-be573b6f35bf4f8f0e1e.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/pages/index-dcd97e3b52bf7ca670e8.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/pages/places/%5Bslug%5D-65893b0f1e891ea68c42.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/polyfills-8a95e710217664a42390.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/_next/static/chunks/webpack-c716a929d5f31ddfdb27.js",revision:"DFKvhfdvxSiw-1NK9bDK8"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"00fe96a5bc6f3a10230b1e8df5130933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
