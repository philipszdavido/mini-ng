# Guides — Router

The project contains a lightweight router under `core/framework/router`. It provides navigation and route definitions.

Usage (conceptual)

```ts
// define routes
const routes = [ { path: '', component: Home }, { path: 'about', component: About } ];

// bootstrap router in your app entry
bootstrapRouter(routes);
```
