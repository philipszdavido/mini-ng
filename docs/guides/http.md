# Guides — HTTP

Use `core/framework/http/http.ts` for basic HTTP utilities. The API is small and promise-based.

Example (conceptual)

```ts
import { HttpClient } from '@mini-ng/core';

class App {
  constructor(http: HttpClient) {
    http.get('/api/data').then(data => this.data = data);
  }
}
```
