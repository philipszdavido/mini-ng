# Guides — Components

Component authoring

- Use `@Component({...})` to declare a component. The compiler will emit a static `ɵcmp` definition.

Template function shape

- Templates are emitted as functions with two render phases: `CREATE` and `UPDATE`.

Lifecycle & change detection

- Use simple instance properties for state. The runtime calls the template with `RenderFlags` to separate creation vs update work.

Example

```ts
@Component({ selector: 'hello', template: `<div>Hello {{name}}</div>` })
class HelloCmp { name = 'world' }
```
