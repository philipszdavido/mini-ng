# Mini-NG Core
This is my own JavaScript framework

# Usage

```typescript
//person.component.ts
import { Component } from '@mini-ng/core';

@Component({
     selector: 'test',
     template: '<h1>hi</h1>'
})

export class Person {
  public name: string;
  constructor(){}
}
```
```typescript
main.ts
import { bootstrapApplication } from '@mini-ng/core';
import Person from 'person.component'

bootstrapApplication(Person);
```

## Tech to achieve

* Change detection
* template compiler
* Dependency injection
* Compile components, directives
* Compile template component's css e.g 'style: [comp.css]'
* Compile expressions e.g '{a + b}'
