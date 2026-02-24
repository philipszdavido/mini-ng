# Getting Started

This quickstart gets you from zero to a running mini-ng app.

Prerequisites
- Node.js 16+ and npm

Install dependencies

```bash
npm install
```

Create a new component

```ts
import { Component } from "@mini-ng/core";

@Component({ selector: "app-root", template: `<h1>Hello {{name}}</h1>` })
class AppRoot {
  name = "mini-ng";
}

export default AppRoot;
```

Build & run the sample

```bash
# compile the sample project (mini-ng-test)
node ./compiler/dist/main.js

# then open the produced bundle in a browser or serve the folder
```

Next
- Follow the Tutorial to build a small multi-component app: docs/tutorial/01-intro.md
