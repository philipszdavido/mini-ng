# 4 — Advanced topics

Plugins & extending the compiler

- The transform pipeline is extendable: write additional `ts.TransformerFactory<ts.SourceFile>` and include them in the `before` array passed to `program.emit`.
- Use the visitor utilities in `compiler/src/visitor` and `compiler/src/transformer` as examples for creating AST nodes and injecting statements.

Performance tips

- Prefer small templates and fewer nested structures. The runtime uses simple template functions — reduce the amount of per-render work inside `UPDATE` branches.
- Reuse hoisted styles/constants: the compiler can hoist constant arrays into top-level statements to avoid recreating them.

Debugging emitted code

- Inspect emitted `.js` files in `dist` after running the compiler.
- The plugin keeps source structure readable: look for `ɵcmp` and the generated factory near the class declaration.

Server-side rendering & hydration

- `runtime` and `TView`/`LView` include flags and utilities that can be used as a basis for SSR and hydration. See `core/framework/core/core.ts` for `NameSpace` and `inSkipHydrationBlock` flags.

Testing compiled outputs

- Use the sample project `mini-ng-test` as a testbed. Compile it with the compiler and load the resulting bundle in a browser or Node-based DOM test environment.
