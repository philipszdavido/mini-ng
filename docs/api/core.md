# API Reference — Core

This page summarizes the primary runtime API exported by `@mini-ng/core` (look at `core/framework/core` source for full details).

Key exports

- `CREATE`, `UPDATE` — render flags
- `ɵɵdefineComponent(def)` — create a `ComponentDef` used by the runtime
- `getComponentDef(type)` / `getDirectiveDef(type)` — read static definitions from compiled classes
- `enterView(lView)` / `leaveView()` — manage the current rendering frame
- Types: `TView`, `LView`, `ComponentDef`, `DirectiveDef`, `TNode`, `LView`

See source: `core/framework/core/core.ts` for full type definitions and helpers.
