# 2 — Core runtime

This section documents the low-level runtime types and helpers found under `core/framework/core`.

Key concepts

- Render phases: `CREATE` and `UPDATE` (constants exported by the runtime).
- `TView` and `LView`: static template description vs runtime instance state.
- `ComponentDef` and `DirectiveDef`: static metadata the compiler emits for each component/directive.
- `runtime` (current frame): holds `currentLView`, `currentTNode`, and selected index used during rendering.

Important runtime functions

- `enterView(lView: LView)` / `leaveView()` — push/pop the current rendering frame.
- `ɵɵdefineComponent(def)` — runtime helper to produce a `ComponentDef` from a component declaration (used by emitted code).
- `getComponentDef(type)` / `getDirectiveDef(type)` — retrieve compiled metadata from a class (the `ɵcmp` / `ɵdir` static fields).

Component definition shape (summary)

- `id`: generated component id
- `template`: render function `(rf, ctx) => void`
- `consts`, `decls`, `vars`: static template metrics
- `hostBindings`, `hostVars`, `selectors`, `inputs`, `outputs`

Example: Using compiled metadata

```ts
import { getComponentDef, enterView, leaveView } from "@mini-ng/core";

const compDef = getComponentDef(MyComponent);
// compDef.template will be a function invoked by the renderer

const lview = {
  tView: compDef.tView,
  data: [],
  instances: [],
  parent: null,
  host: document.createElement("div"),
  context: null,
  queries: { queries: [] },
  flags: 0,
  id: 1,
};
enterView(lview);
// call template with CREATE/UPDATE flags
compDef.template(1 /* CREATE */, /* ctx */ {});
leaveView();
```

Where to read the code

- Low-level types: `core/framework/core/core.ts`
- DI & zone: `core/framework/core/di.ts`, `zone.ts`
- Helpers and utilities: `shared.ts`, `utils.ts`.
