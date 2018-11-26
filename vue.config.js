module.exports = {
  lintOnSave: false,

  pwa: {
    name: 'PWA app',
    themeColor: '#3C94F9',
    msTileColor: '#FFFFFF',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'public/service-worker.js'
      // ...other Workbox options...
    }
  }
}
