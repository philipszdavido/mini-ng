# CLI

The repo includes a CLI entry under `cli/` that can be used to scaffold or run the compiler. The compiled `bin/ng` is available in `cli/bin/ng`.

Basic commands

- `ng build` — not yet implemented (placeholder)
- `ng serve` — not yet implemented

Note: The current project uses `node ./compiler/dist/main.js` to run the compiler directly; extend `cli/` to add user-facing commands.
