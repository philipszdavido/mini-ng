# API Reference — Compiler

The compiler exposes a transform plugin that the build step uses to synthesize static metadata and factories for components and directives.

Key files

- `compiler/src/main.ts` — entry that wires TypeScript program + `transformPlugin` then bundles.
- `compiler/src/visitor/visitor.ts` — `transformPlugin(program)` produces a `ts.TransformerFactory` that walks the AST and emits static `ɵcmp`/`ɵdir` definitions.
- `compiler/src/transformer` — helper functions that synthesize AST nodes.

How the plugin is applied (conceptual)

```ts
const emitResult = program.emit(undefined, undefined, undefined, undefined, {
  before: [ transformPlugin(program) ],
});
```

Notes

- The plugin also hoists statements and injects a namespace import alias `i0` for `@mini-ng/core` used by emitted helpers.
