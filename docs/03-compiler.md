# 3 — Compiler & transforms

mini-ng uses a TypeScript transform to compile class-based components into static runtime metadata and factory helpers.

Entry point

- `compiler/src/main.ts` — creates a TypeScript `Program`, runs `program.emit(...)` with a `before` transformer produced by `transformPlugin(program)`, then bundles the project.

Transform flow

- `compiler/src/visitor/visitor.ts` (the plugin) visits TypeScript AST nodes.
- When it finds classes with `@Component` or `@Directive`, it:
  - extracts metadata (`extractComponentMetadata` in `transformer`),
  - creates a factory helper (`createFactoryStatic`),
  - creates a compiled component/directive definition (`createDefineComponentStatic` / `createDefineDirectiveStatic`),
  - updates the class declaration to append the generated static fields (e.g., `ɵcmp`, `ɵdir`) and factory.
- The plugin also ensures an import alias `i0` from `@mini-ng/core` is available (the runtime helpers).

Where transforms live

- `compiler/src/transformer` — utilities to synthesize AST nodes for `ɵcmp`/factory.
- `compiler/src/visitor` — AST walker that applies transforms.

How to run the compiler

From the repository root (example):

```bash
# build TypeScript files (if needed) then run the compiler entry
node ./compiler/dist/main.js
```

Minimal before/after example

Before - user code:

```ts
@Component({ selector: "my-app", template: `<div>{{ name }}</div>` })
class App {
  name = "mini-ng";
}
```

After - what the transform emits (simplified):

```ts
App.ɵcmp = i0.ɵɵdefineComponent({
  type: App,
  selectors: [["my-app"]],
  template: function MyAppTemplate(rf, ctx) {
    if (rf & 1) {
      // create DOM
    }
    if (rf & 2) {
      // update bindings
    }
  },
});

function App_Factory() {
  return new App();
}

export { App };
```

Notes

- The emitted `ɵcmp` is the static metadata the runtime reads. The template is a plain JS function that the runtime calls with render flags (`CREATE` / `UPDATE`).
- The compiler also supports hoisting statements and injecting imports required by emitted code.
