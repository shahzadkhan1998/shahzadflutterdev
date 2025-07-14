'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d818044b8f7800f31766fa572eb4d69a",
"version.json": "f7766c2ffa2d47c66ca7997834b1763c",
"index.html": "554fb9488d9a0d2ceda6663d2650b23c",
"/": "554fb9488d9a0d2ceda6663d2650b23c",
"main.dart.js": "3725aa0ff6fa61e168377ba8d2cad2b3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b607b55d780a3c0cdbb74236fcde2b7",
".git/config": "5a734e99bf2d2ca5093c4f04c021e969",
".git/objects/66/a44a207147c33a1c172be5b8c14197a79546d4": "ad7d049576f7ad7dbc997df6ddb34e5e",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "9d836ef00699074759f59075d3f43e9d",
".git/objects/9e/c468b8e47442c191cd52f4660239900cfc443b": "0e669f52a6b8fed65277e69e8c45c797",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "71883668deb5b0ece73cb882577fe76e",
".git/objects/69/05ee4d2b795369dc93acfd0e094ccf88034cdd": "0775cf2186954f834777cd132ab3eca9",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "32998128d1119e8a2bb0372b71e31c46",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "ff92e3f561abb30e414f0ae2b86f15e0",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "42188cbf53c37d1e43d819f879fa1c8b",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "5c7efbbe0b029a2a8304e989b37f0a92",
".git/objects/33/fc7f799ef3e1d3e7798156a08c613bf3735864": "8fa73a5c28d82e2da362e67d4d65d42f",
".git/objects/05/9b2d0e53c39776236a4d0a27177d06a5af6c0c": "318d04ea0372201d64fb915c3fe87d2f",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "fe361dc8df0003a0b0de813bee24f15b",
".git/objects/a3/66d5a6f883fe22e4fc8381a17375f5afefe7ec": "121902a9311650d4e29e6346cbe268ce",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "b8061284ad14fdb17261eba2da950c26",
".git/objects/b5/74405d620bfca274301e5ccd1786458480aef3": "f18fd69cc2611d7c790e4337c8a50ad0",
".git/objects/b5/b467cebf32642e58472fc29075c50854f06029": "0b8c68b2dc66ba28e988351e2619a28b",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "a3769496b80a3ef11ef1694f4421d360",
".git/objects/ad/4e8bf1ed02f34a327f68e613dae124876080dc": "fcdb7336cb83abc7fad2427bbd886b39",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "96af096a1c82e0cd5e5504f54051bfd1",
".git/objects/b3/3f4a4cd05bfc203a2a68b2cd301555e44b74f7": "a68f887d26198f9ad966a48424aa13d7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "6db25022b3f622887a1afa3d4b032b63",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "d4fe69f6c335c8bad55978ca1a055fb6",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "cfb6d105d276d57b9b8846ba14d1b6e9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "cc7e1906b785ddd2dcd913e87bf5414a",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "466d49710f499299bdf04621bf2fad49",
".git/objects/ee/7b8b4db6e830fb63bb4bcf26f77418f0c028b2": "634fc3ac2026d2a6e0c50ebd54bf58d8",
".git/objects/c9/8a269fa8904eba2a2aacaeb70d455e1f65e1ea": "09622234461a049b01b099e38b7c1ac4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "496f384eba09e7df8f8dd44cc74f804b",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "776390a5750056a893a2b8108fc7cadc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "42765ac4b29619c6903b3567df457e6a",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "75d80e71090400d538845c7732daf92a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "24d03e4294be8bce7fb9ca31cdc84455",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "c4feb19aedfdf08d144c9043a41ebc22",
".git/objects/8a/cb73485ffd62f35e42827b0db50b7d39597fd4": "b914f7716fb71896ea1062c102bb19be",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "0cfb4316ebfff5b69213c43d1419309c",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "1da465da4a3ce7e8c42fbedb424cb94b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "a5bd98e9606c19bdcf62b8793dc267c5",
".git/objects/44/f6c69cd6fda2d5182979c9e95f8ed7418b1c8a": "476d8155b2e7f77a6010e159d55175c5",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "0195b35a2e9220ac4063da05a9ce3176",
".git/objects/43/5bce92d86b31cdbcc7f2bb3e67daf93ab6bba4": "a69ceaf947e73ec880b067df6f75b3ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "c75407268ac8726994f36beb60882f3d",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "2e856f1f2c341181d85c48f74df6f10a",
".git/objects/9f/9d8e195214538f56eb51131267bc507e4ba326": "662925d9437e970dda2e6c1813e668da",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "2beecd197c08a19e52c06b23d97ff217",
".git/objects/5c/4d65029dd97c9de4f554fa49203a4887257b09": "27b90e779f5de400f45719c3f31c0d0e",
".git/objects/31/9677a507d57436e47785ae0e4ab4a56a1e82ef": "bbef38d7b5e50aefb32980d7b31263e8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "b2632b7bbd3234f4c5223b56f94057b3",
".git/objects/54/459faea3d3fc3c3c04483c002772cefa881e56": "4ec384a9331eb729a37cbc81de49e48e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "c5c4eaae33b6f0a53a6d4c96eaf1d198",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "3eea4b9a95d247b0ad50f3afc31b513f",
".git/objects/5b/68aecbe339c122424e541af8c95dc3fc6270f2": "5ac6523970c33ebbb72f8644d1fef1de",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "5233b081bae54b4f5e25e2f6ef3bc23f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "f3546fffedbd73bb2c5b6a8dfe539d1f",
".git/objects/01/1011ec7c173b951675295aa142b7d8a67e74fa": "64e62198241ce79bd7d9a1a839dab8fd",
".git/objects/39/cae5770e8aac17bbdb484fa1ba1b1adf465baa": "ab2b06f24389a9c102846dcfcbe52ee3",
".git/objects/39/8848d8d916e542b6c88b836d48f51975e33547": "d413c8a4fd6c1f6452885082b38a1f51",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "ff1f360a8b5536b423dff51a725141fa",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "6db2e4f57372afcd19274809e420b4b3",
".git/objects/bf/6c2d025f77ec21b8ea848f4ee8d7947beda0ae": "86da2884a88b5a1d2b5daa3907ef851d",
".git/objects/d3/a6ec17e02240be147bbbfb453a1504926952bc": "678d246d6228ce663baab5d3c01f8e5b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "6a16b7974a44e37536774c84e172d5f5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "784096d00deb9f0a0f88518eb68a8fef",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "1f0b4120489b812c3503827544a875c1",
".git/objects/d2/867269bb18d8f33b1dd5a8899e670f893ce06e": "607e55d7a38ef9fa54f14530e82d3917",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "7a11e095fec0390a04f2ef5e2bd14e55",
".git/objects/db/595003240bf161eb8cd676991ab0d1d62ca2a1": "f11f6a318fc97a62785823705584f1e2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "d7abe23b2ba5060618a83d91c03d0d6f",
".git/objects/b9/b0d446b2d91700198305035e3cd29ade5b723b": "a921efb1e84b5e565e4c86e43256594f",
".git/objects/fa/dc8ea2b3a74642728f12668b8a6d970a6409b0": "8a21f694adb552d26bfd9a71be572d9a",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "ffc3affa591358ff6a7e5e1baa4027d2",
".git/objects/e9/00bb47fb21b10ffcafd0a95ef3fd70e697a46e": "6467f4def7ea30476ed19153c22da99c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "84c4543bbfea8fd176c2ba781862b2b6",
".git/objects/e0/097dd70253442d9a15b676f7a06e2a9378e05e": "eba6389f72466c9b78749a5c5169ad9c",
".git/objects/e0/6148d58661c63709d50ab6f9e8c57792b8616f": "e76ae486bf542522cb45366757fd3a62",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "a7f5768afaf360204a0bf5a42a9a2878",
".git/objects/1e/0eaf607843c300cb02b50103fd31d27612bd71": "567047aec8a5a0a8b29107853c7ec1e4",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "ec1ac62d601536adeb16e6cf22803d1e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "96ad8cb183a37c8a664ca3a100d09fec",
".git/objects/4a/b4a03a3e2f7c7976f79b66b61eaf830d6d381c": "d62dd2bf10a0ec1575a8e4a07e9e9389",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "8f4d77edf419f105f5aeccd4b88cef23",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "f536ea9ad644433c655c15cb8604485c",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "05a91d101363938ee37269db89bb46ad",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "b5a10fdca138cf2836f7a96973172028",
".git/objects/49/732da40b5c35033611b74eefd26beb88b8026e": "2c39f44888c54b9df0b3371b228810d3",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "aa23ee337b88d3c8b9b1710055b7dfc0",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "d539368bd885017457636c01ea48c4b3",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "6573e8fa60ce9d36463202cbcae49372",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "1df58745cab9556742e070f097239e78",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "0a84211f5a5ab84fd2bac962e4108036",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64b3b4bbbbb9fba8e97a9b92a84a75ae",
".git/logs/refs/heads/main": "b49b747673ad8723c85b3c070d8d8d1e",
".git/logs/refs/remotes/origin/main": "a214dff0aa6b572b903b9928c8ce8832",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dc436ae45095847b0be61cef6eca5232",
".git/refs/remotes/origin/main": "dc436ae45095847b0be61cef6eca5232",
".git/index": "86d9f46508c30a96f1d65afebf409dfd",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "2796bf48df1007486e9868334b816545",
"assets/AssetManifest.json": "574710c557896a2b886360805252f342",
"assets/NOTICES": "d1e026a7eee17987c480856aba59022c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "dc52b141ec04444067f3e428bcb1443c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "11487f27800bd3ec4e94e79f6e047cd4",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ae4d3fe9637f1fe7f3cee5b67d4d99a2",
"assets/fonts/MaterialIcons-Regular.otf": "b1ea7be12e09e19ea567fd862a262810",
"assets/assets/fonts/MaterialIcons-Regular.otf": "db95c7a173b2a29e80caf2ae2daa8fca",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
