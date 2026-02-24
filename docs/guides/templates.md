# Guides — Templates

Templates are compiled to plain JS functions. They receive `rf` (render flags) and `ctx` (component instance).

Render flags

- `CREATE` (1): create DOM nodes
- `UPDATE` (2): update bindings

Example template (simplified emitted form)

```ts
function MyTpl(rf, ctx) {
  if (rf & CREATE) {
    // create DOM nodes
  }
  if (rf & UPDATE) {
    // update properties and bindings
  }
}
```
