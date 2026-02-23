# Examples & sample app

Sample app

- There is a sample project at the repo root: `mini-ng-test`. It contains simple components used as examples.

How to build and run the sample

1. From repo root, ensure dependencies are installed:

```bash
npm install
```

2. Run the compiler entry (compiles `mini-ng-test/src` and bundles):

```bash
node ./compiler/dist/main.js
```

Structure of a sample component

`mini-ng-test/src/example.component.ts` illustrates basic component usage — author components with `@Component`, then let the compiler emit runtime metadata.

Inspect emitted code

- After compilation, inspect `mini-ng-test/dist` (or the configured `outDir`) to see emitted `ɵcmp` definitions and factories.
