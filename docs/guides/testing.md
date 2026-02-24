# Guides — Testing

Test compiled output by compiling `mini-ng-test` and running the bundle in a Node-based DOM environment (jsdom) or a browser.

Steps

1. Compile: `node ./compiler/dist/main.js`.
2. Load emitted bundle into `jsdom` or open `mini-ng-test/dist/index.html` in a browser.
