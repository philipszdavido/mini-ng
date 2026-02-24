# Guides — Dependency Injection

mini-ng includes simple DI utilities in `core/framework/core/di.ts`.

Provide and inject services by constructor parameters; the compiler/runtime will use generated factories to wire dependencies.

Example (conceptual)

```ts
class DataService { get() { return [1,2,3]; } }

@Component({ selector: 'app', template: `...` })
class App {
  constructor(dataService: DataService) {
    this.data = dataService.get();
  }
}
```
