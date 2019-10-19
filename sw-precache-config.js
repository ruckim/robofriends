module.exports = {
    stripPrefix: "build/",
    staticFileGlobs: [
        "build/*.html",
        "build/manifest.html",
        "build/static/**/!(*map*)"
    ],
    dontCacheBustUrlMatching: /\.\w{8}\./,
    swFilePath: "build/service-worker.js"
};