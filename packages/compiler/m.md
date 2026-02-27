Current Directory: /Users/chidumennamdi/Documents/developerse/my-angular/test
node: <ref *1> NodeObject {
  pos: 271,
  end: 792,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 50340865,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 1493,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 54789121,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [Circular *1],
      pos: 0,
      end: 792,
      hasTrailingComma: false,
      transformFlags: 54789121
    ],
    endOfFileToken: TokenObject {
      pos: 792,
      end: 1493,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1,
      jsDoc: [Array]
    },
    text: 'import {\n' +
      '  ChangeDetectionStrategy,\n' +
      '  Component,\n' +
      '  Output,\n' +
      '  Signal,\n' +
      '  WritableSignal,\n' +
      '  computed,\n' +
      '  effect,\n' +
      '  signal,\n' +
      '} from "@angular/core";\n' +
      '\n' +
      'export const count: WritableSignal<number> = signal(0);\n' +
      'export const doubleCount: Signal<number> = computed(() => count() * 2);\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "heavy-weight-component",\n' +
      '  standalone: true,\n' +
      '  template: `\n' +
      '    <div style="background-color: orange;padding: 10px;">\n' +
      '      <div>Heavy Count: {{ _count() }}</div>\n' +
      '      <div>Double Count: {{ doubleCount() }}</div>\n' +
      '\n' +
      '      <button (click)="clickHandler()">Heavy Incr</button>\n' +
      '    </div>\n' +
      '  `,\n' +
      '  changeDetection: ChangeDetectionStrategy.OnPush,\n' +
      '})\n' +
      'export class HeavyComponent {\n' +
      '  _count = count;\n' +
      '  doubleCount = doubleCount;\n' +
      '\n' +
      '  clickHandler() {\n' +
      '    this._count.update((value) => value + 100);\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      '/**\n' +
      ' * A `Signal` with a value that can be mutated via a setter interface.\n' +
      ' */\n' +
      '// export declare interface WritableSignal<T> extends Signal<T> {\n' +
      '/**\n' +
      ' * Directly set the signal to a new value, and notify any dependents.\n' +
      ' */\n' +
      '//set(value: T): void;\n' +
      '/**\n' +
      ' * Update the value of the signal based on its current value, and\n' +
      ' * notify any dependents.\n' +
      ' */\n' +
      '//update(updateFn: (value: T) => T): void;\n' +
      '/**\n' +
      ' * Returns a readonly version of this signal. Readonly signals can be accessed to read their value\n' +
      " * but can't be changed using set, update or mutate methods. The readonly signals do _not_ have\n" +
      ' * any built-in mechanism that would prevent deep-mutation of their value.\n' +
      ' */\n' +
      '// asReadonly(): Signal<T>;\n' +
      '//}\n',
    fileName: '/Users/chidumennamdi/Documents/developerse/my-angular/test/src/heavy-weight-component.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/heavy-weight-component.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/heavy-weight-component.ts',
    originalFileName: '/Users/chidumennamdi/Documents/developerse/my-angular/test/src/heavy-weight-component.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(11) {
      'ChangeDetectionStrategy' => [SymbolObject],
      'Component' => [SymbolObject],
      'Output' => [SymbolObject],
      'Signal' => [SymbolObject],
      'WritableSignal' => [SymbolObject],
      'computed' => [SymbolObject],
      'effect' => [SymbolObject],
      'signal' => [SymbolObject],
      'count' => [SymbolObject],
      'doubleCount' => [SymbolObject],
      'HeavyComponent' => [SymbolObject]
    },
    nextContainer: NodeObject {
      pos: 252,
      end: 269,
      flags: 512,
      modifierFlagsCache: 536870912,
      transformFlags: 1024,
      parent: [NodeObject],
      kind: 219,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      equalsGreaterThanToken: [TokenObject],
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: Map(0) {},
      nextContainer: [NodeObject],
      flowNode: [Object],
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 27975
    },
    endFlowNode: { flags: 16, antecedent: [Object], node: [NodeObject] },
    nodeCount: 99,
    identifierCount: 32,
    symbolCount: 27,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: [
         0,    9,   36,   49,   59,   69,   87,   99,
       109,  119,  143,  144,  200,  272,  273,  286,
       324,  344,  358,  416,  461,  512,  513,  572,
       583,  588,  639,  642,  672,  690,  719,  720,
       739,  787,  791,  793,  794,  798,  869,  873,
       939,  943, 1013, 1017, 1040, 1044, 1110, 1136,
      1140, 1183, 1187, 1286, 1382, 1457, 1461, 1489,
      1493
    ],
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 142,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(21) {
      'ChangeDetectionStrategy' => 'ChangeDetectionStrategy',
      'Component' => 'Component',
      'Output' => 'Output',
      'Signal' => 'Signal',
      'WritableSignal' => 'WritableSignal',
      'computed' => 'computed',
      'effect' => 'effect',
      'signal' => 'signal',
      '@angular/core' => '@angular/core',
      'count' => 'count',
      'doubleCount' => 'doubleCount',
      'selector' => 'selector',
      'standalone' => 'standalone',
      'template' => 'template',
      'changeDetection' => 'changeDetection',
      'OnPush' => 'OnPush',
      'HeavyComponent' => 'HeavyComponent',
      '_count' => '_count',
      'clickHandler' => 'clickHandler',
      'update' => 'update',
      'value' => 'value'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [ [NodeObject] ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(9) {
      'ChangeDetectionStrategy',
      'Component',
      'Output',
      'Signal',
      'WritableSignal',
      'computed',
      'effect',
      'signal',
      'HeavyComponent'
    },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24072,
      mergeId: 0,
      flags: 512,
      escapedName: '"/Users/chidumennamdi/Documents/developerse/my-angular/test/src/heavy-weight-component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 27968
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24066,
    mergeId: 0,
    flags: 32,
    escapedName: 'HeavyComponent',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(3) {
      '_count' => [SymbolObject],
      'doubleCount' => [SymbolObject],
      'clickHandler' => [SymbolObject]
    },
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24072,
      mergeId: 0,
      flags: 512,
      escapedName: '"/Users/chidumennamdi/Documents/developerse/my-angular/test/src/heavy-weight-component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'HeavyComponent',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24066,
      mergeId: 0,
      flags: 32,
      escapedName: 'HeavyComponent',
      declarations: [Array],
      exports: [Map],
      members: [Map],
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    }
  },
  modifiers: [
    NodeObject {
      pos: 271,
      end: 641,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 27976
    },
    TokenObject {
      pos: 641,
      end: 648,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 271,
    end: 648,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 654,
    end: 669,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'HeavyComponent',
    jsDoc: undefined,
    flowNode: { flags: 16, antecedent: [Object], node: [NodeObject] },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [
    NodeObject {
      pos: 671,
      end: 689,
      flags: 65536,
      modifierFlagsCache: 536870912,
      transformFlags: 16777216,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [IdentifierObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 689,
      end: 718,
      flags: 65536,
      modifierFlagsCache: 536870912,
      transformFlags: 16777216,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [IdentifierObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 718,
      end: 790,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17408,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: Map(0) {},
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 27985
    },
    pos: 671,
    end: 790,
    hasTrailingComma: false,
    transformFlags: 16778240
  ],
  jsDoc: undefined
}
node: true HeavyComponent
node: <ref *1> NodeObject {
  pos: 42,
  end: 170,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 33563649,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 171,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 33555457,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [Circular *1],
      pos: 0,
      end: 170,
      hasTrailingComma: false,
      transformFlags: 33555457
    ],
    endOfFileToken: TokenObject {
      pos: 170,
      end: 171,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1
    },
    text: 'import { Component } from "@angular/core";\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "loading-spinner",\n' +
      '  standalone: true,\n' +
      '  template: ` Loading...`,\n' +
      '})\n' +
      'export class LoadingComponent {}\n',
    fileName: '/Users/chidumennamdi/Documents/developerse/my-angular/test/src/loading-spinner.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/loading-spinner.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/loading-spinner.ts',
    originalFileName: '/Users/chidumennamdi/Documents/developerse/my-angular/test/src/loading-spinner.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(2) {
      'Component' => [SymbolObject],
      'LoadingComponent' => [SymbolObject]
    },
    nextContainer: undefined,
    endFlowNode: { flags: 2 },
    nodeCount: 24,
    identifierCount: 6,
    symbolCount: 9,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: undefined,
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 42,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(6) {
      'Component' => 'Component',
      '@angular/core' => '@angular/core',
      'selector' => 'selector',
      'standalone' => 'standalone',
      'template' => 'template',
      'LoadingComponent' => 'LoadingComponent'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [ [NodeObject] ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(2) { 'Component', 'LoadingComponent' },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24078,
      mergeId: 0,
      flags: 512,
      escapedName: '"/Users/chidumennamdi/Documents/developerse/my-angular/test/src/loading-spinner"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 27994
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24077,
    mergeId: 0,
    flags: 32,
    escapedName: 'LoadingComponent',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(0) {},
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24078,
      mergeId: 0,
      flags: 512,
      escapedName: '"/Users/chidumennamdi/Documents/developerse/my-angular/test/src/loading-spinner"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'LoadingComponent',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24077,
      mergeId: 0,
      flags: 32,
      escapedName: 'LoadingComponent',
      declarations: [Array],
      exports: [Map],
      members: Map(0) {},
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    }
  },
  modifiers: [
    NodeObject {
      pos: 42,
      end: 137,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 27995
    },
    TokenObject {
      pos: 137,
      end: 144,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 42,
    end: 144,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 150,
    end: 167,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'LoadingComponent',
    jsDoc: undefined,
    flowNode: { flags: 2 },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [ pos: 169, end: 169, hasTrailingComma: false, transformFlags: 0 ],
  jsDoc: undefined
}
node: true LoadingComponent
node: <ref *1> NodeObject {
  pos: 42,
  end: 166,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 33563649,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 167,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 33555457,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [Circular *1],
      pos: 0,
      end: 166,
      hasTrailingComma: false,
      transformFlags: 33555457
    ],
    endOfFileToken: TokenObject {
      pos: 166,
      end: 167,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1
    },
    text: 'import { Component } from "@angular/core";\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "ng-component",\n' +
      '  standalone: true,\n' +
      '  template: `hello Component`,\n' +
      '})\n' +
      'export class NgComponent {}\n',
    fileName: '/Users/chidumennamdi/Documents/developerse/my-angular/test/src/ng-component.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/ng-component.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/ng-component.ts',
    originalFileName: '/Users/chidumennamdi/Documents/developerse/my-angular/test/src/ng-component.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(2) {
      'Component' => [SymbolObject],
      'NgComponent' => [SymbolObject]
    },
    nextContainer: undefined,
    endFlowNode: { flags: 2 },
    nodeCount: 24,
    identifierCount: 6,
    symbolCount: 9,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: undefined,
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 42,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(6) {
      'Component' => 'Component',
      '@angular/core' => '@angular/core',
      'selector' => 'selector',
      'standalone' => 'standalone',
      'template' => 'template',
      'NgComponent' => 'NgComponent'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [ [NodeObject] ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(2) { 'Component', 'NgComponent' },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24084,
      mergeId: 0,
      flags: 512,
      escapedName: '"/Users/chidumennamdi/Documents/developerse/my-angular/test/src/ng-component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 28000
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24083,
    mergeId: 0,
    flags: 32,
    escapedName: 'NgComponent',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(0) {},
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24084,
      mergeId: 0,
      flags: 512,
      escapedName: '"/Users/chidumennamdi/Documents/developerse/my-angular/test/src/ng-component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'NgComponent',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24083,
      mergeId: 0,
      flags: 32,
      escapedName: 'NgComponent',
      declarations: [Array],
      exports: [Map],
      members: Map(0) {},
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    }
  },
  modifiers: [
    NodeObject {
      pos: 42,
      end: 138,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 28001
    },
    TokenObject {
      pos: 138,
      end: 145,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 42,
    end: 145,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 151,
    end: 163,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'NgComponent',
    jsDoc: undefined,
    flowNode: { flags: 2 },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [ pos: 165, end: 165, hasTrailingComma: false, transformFlags: 0 ],
  jsDoc: undefined
}
node: true NgComponent
node: <ref *1> NodeObject {
  pos: 291,
  end: 998,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 50340865,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 999,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 50332673,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [Circular *1],
      pos: 0,
      end: 998,
      hasTrailingComma: false,
      transformFlags: 50332673
    ],
    endOfFileToken: TokenObject {
      pos: 998,
      end: 999,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1
    },
    text: 'import {\n' +
      '  ChangeDetectionStrategy,\n' +
      '  ChangeDetectorRef,\n' +
      '  Component,\n' +
      '  Injector,\n' +
      '  effect,\n' +
      '  inject,\n' +
      '} from "@angular/core";\n' +
      'import { HeavyComponent, count } from "./heavy-weight-component";\n' +
      'import { LoadingComponent } from "./loading-spinner";\n' +
      'import { NgComponent } from "./ng-component";\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "app-table",\n' +
      '  imports: [HeavyComponent, LoadingComponent, NgComponent],\n' +
      '  standalone: true,\n' +
      '  template: `\n' +
      '    <div style="background-color: brown;padding: 10px;">\n' +
      '      {{ countSig() }}\n' +
      '\n' +
      '      <button (click)="clickHandler()">Increment</button>\n' +
      '    </div>\n' +
      '  `,\n' +
      '  changeDetection: ChangeDetectionStrategy.OnPush,\n' +
      '})\n' +
      'export class ExampleComponent {\n' +
      '  countSig = count;\n' +
      '\n' +
      '  private cdr = inject(ChangeDetectorRef);\n' +
      '  initializeLogging(): void {\n' +
      '    effect(\n' +
      '      () => {\n' +
      '        console.log(`The count is N`);\n' +
      '      },\n' +
      '      { injector: this.injector }\n' +
      '    );\n' +
      '  }\n' +
      '\n' +
      '  constructor(private injector: Injector) {}\n' +
      '\n' +
      '  clickHandler() {\n' +
      '    this.countSig.update((value) => value + 1);\n' +
      '  }\n' +
      '}\n',
    fileName: 'src/example.component.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/example.component.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/example.component.ts',
    originalFileName: 'src/example.component.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(11) {
      'ChangeDetectionStrategy' => [SymbolObject],
      'ChangeDetectorRef' => [SymbolObject],
      'Component' => [SymbolObject],
      'Injector' => [SymbolObject],
      'effect' => [SymbolObject],
      'inject' => [SymbolObject],
      'HeavyComponent' => [SymbolObject],
      'count' => [SymbolObject],
      'LoadingComponent' => [SymbolObject],
      'NgComponent' => [SymbolObject],
      'ExampleComponent' => [SymbolObject]
    },
    nextContainer: NodeObject {
      pos: 729,
      end: 878,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17409,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: [TokenObject],
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: Map(0) {},
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 28025
    },
    endFlowNode: { flags: 2 },
    nodeCount: 121,
    identifierCount: 40,
    symbolCount: 32,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: [
        0,   9,  36,  57,  70,  82,  92, 102, 126,
      192, 246, 292, 293, 306, 331, 391, 411, 425,
      482, 505, 506, 564, 575, 580, 631, 634, 666,
      686, 687, 730, 760, 772, 786, 825, 834, 868,
      875, 879, 880, 925, 926, 945, 993, 997, 999
    ],
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 125,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(30) {
      'ChangeDetectionStrategy' => 'ChangeDetectionStrategy',
      'ChangeDetectorRef' => 'ChangeDetectorRef',
      'Component' => 'Component',
      'Injector' => 'Injector',
      'effect' => 'effect',
      'inject' => 'inject',
      '@angular/core' => '@angular/core',
      'HeavyComponent' => 'HeavyComponent',
      'count' => 'count',
      './heavy-weight-component' => './heavy-weight-component',
      'LoadingComponent' => 'LoadingComponent',
      './loading-spinner' => './loading-spinner',
      'NgComponent' => 'NgComponent',
      './ng-component' => './ng-component',
      'selector' => 'selector',
      'imports' => 'imports',
      'standalone' => 'standalone',
      'template' => 'template',
      'changeDetection' => 'changeDetection',
      'OnPush' => 'OnPush',
      'ExampleComponent' => 'ExampleComponent',
      'countSig' => 'countSig',
      'cdr' => 'cdr',
      'initializeLogging' => 'initializeLogging',
      'console' => 'console',
      'log' => 'log',
      'injector' => 'injector',
      'clickHandler' => 'clickHandler',
      'update' => 'update',
      'value' => 'value'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [ [NodeObject], [NodeObject], [NodeObject], [NodeObject] ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(11) {
      'ChangeDetectionStrategy',
      'ChangeDetectorRef',
      'Component',
      'Injector',
      'effect',
      'inject',
      'HeavyComponent',
      'count',
      'LoadingComponent',
      'NgComponent',
      'ExampleComponent'
    },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24114,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/example.component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 28006
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24099,
    mergeId: 0,
    flags: 32,
    escapedName: 'ExampleComponent',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(6) {
      'countSig' => [SymbolObject],
      'cdr' => [SymbolObject],
      'initializeLogging' => [SymbolObject],
      '__constructor' => [SymbolObject],
      'injector' => [SymbolObject],
      'clickHandler' => [SymbolObject]
    },
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24114,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/example.component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'ExampleComponent',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24099,
      mergeId: 0,
      flags: 32,
      escapedName: 'ExampleComponent',
      declarations: [Array],
      exports: [Map],
      members: [Map],
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    }
  },
  modifiers: [
    NodeObject {
      pos: 291,
      end: 633,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 28007
    },
    TokenObject {
      pos: 633,
      end: 640,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 291,
    end: 640,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 646,
    end: 663,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'ExampleComponent',
    jsDoc: undefined,
    flowNode: { flags: 2 },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [
    NodeObject {
      pos: 665,
      end: 685,
      flags: 65536,
      modifierFlagsCache: 536870912,
      transformFlags: 16777216,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [IdentifierObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 685,
      end: 729,
      flags: 65536,
      modifierFlagsCache: 536870914,
      transformFlags: 16777217,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: [Array],
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [NodeObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 729,
      end: 878,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17409,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: [TokenObject],
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: Map(0) {},
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 28025
    },
    NodeObject {
      pos: 878,
      end: 924,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 9217,
      parent: [Circular *1],
      kind: 176,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      parameters: [Array],
      body: [NodeObject],
      typeParameters: undefined,
      type: undefined,
      typeArguments: undefined,
      jsDoc: [Array],
      locals: [Map],
      nextContainer: [NodeObject],
      endFlowNode: [Object],
      returnFlowNode: [Object],
      id: 28017
    },
    NodeObject {
      pos: 924,
      end: 996,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17408,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: Map(0) {},
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 28030
    },
    pos: 665,
    end: 996,
    hasTrailingComma: false,
    transformFlags: 16786433
  ],
  jsDoc: undefined
}
node: true ExampleComponent
node: <ref *1> NodeObject {
  pos: 42,
  end: 174,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 33563649,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 175,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 33555457,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [Circular *1],
      pos: 0,
      end: 174,
      hasTrailingComma: false,
      transformFlags: 33555457
    ],
    endOfFileToken: TokenObject {
      pos: 174,
      end: 175,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1
    },
    text: 'import { Component } from "@angular/core";\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "app-hello",\n' +
      '  template: `I am Lazy`,\n' +
      '  standalone: true,\n' +
      '  imports: [],\n' +
      '})\n' +
      'export class LazyComponent {}\n',
    fileName: 'src/lazy-component.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/lazy-component.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/lazy-component.ts',
    originalFileName: 'src/lazy-component.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(2) {
      'Component' => [SymbolObject],
      'LazyComponent' => [SymbolObject]
    },
    nextContainer: undefined,
    endFlowNode: { flags: 2 },
    nodeCount: 27,
    identifierCount: 7,
    symbolCount: 10,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: undefined,
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 42,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(7) {
      'Component' => 'Component',
      '@angular/core' => '@angular/core',
      'selector' => 'selector',
      'template' => 'template',
      'standalone' => 'standalone',
      'imports' => 'imports',
      'LazyComponent' => 'LazyComponent'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [ [NodeObject] ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(2) { 'Component', 'LazyComponent' },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24121,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/lazy-component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 28041
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24120,
    mergeId: 0,
    flags: 32,
    escapedName: 'LazyComponent',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(0) {},
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24121,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/lazy-component"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'LazyComponent',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24120,
      mergeId: 0,
      flags: 32,
      escapedName: 'LazyComponent',
      declarations: [Array],
      exports: [Map],
      members: Map(0) {},
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    }
  },
  modifiers: [
    NodeObject {
      pos: 42,
      end: 144,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 28042
    },
    TokenObject {
      pos: 144,
      end: 151,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 42,
    end: 151,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 157,
    end: 171,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'LazyComponent',
    jsDoc: undefined,
    flowNode: { flags: 2 },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [ pos: 173, end: 173, hasTrailingComma: false, transformFlags: 0 ],
  jsDoc: undefined
}
node: true LazyComponent
node: <ref *1> NodeObject {
  pos: 754,
  end: 1096,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 50340897,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 1633,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 50332705,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [Circular *1],
      [NodeObject],
      [NodeObject],
      pos: 0,
      end: 1632,
      hasTrailingComma: false,
      transformFlags: 50332705
    ],
    endOfFileToken: TokenObject {
      pos: 1632,
      end: 1633,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1
    },
    text: 'import {\n' +
      '  Attribute,\n' +
      '  ChangeDetectionStrategy,\n' +
      '  ChangeDetectorRef,\n' +
      '  Component,\n' +
      '  Injector,\n' +
      '  Signal,\n' +
      '  ViewContainerRef,\n' +
      '  WritableSignal,\n' +
      '  computed,\n' +
      '  effect,\n' +
      '  inject,\n' +
      '  signal,\n' +
      '  Input,\n' +
      '  Output,\n' +
      '  EventEmitter,\n' +
      '  Directive,\n' +
      '} from "@angular/core";\n' +
      'import { bootstrapApplication } from "@angular/platform-browser";\n' +
      'import { HeavyComponent, count, doubleCount } from "./heavy-weight-component";\n' +
      'import { LoadingComponent } from "./loading-spinner";\n' +
      'import { NgComponent } from "./ng-component";\n' +
      'import { LazyComponent } from "./lazy-component";\n' +
      'import { Observable, of } from "rxjs";\n' +
      '// import { ExampleComponent } from "./example.component";\n' +
      '\n' +
      'import { toObservable } from "@angular/core/rxjs-interop";\n' +
      'import { AsyncPipe } from "@angular/common";\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "ccustom-slider",\n' +
      '  standalone: true,\n' +
      '  imports: [AsyncPipe],\n' +
      '  template: `\n' +
      `    <button (click)="handleEvent('click')">Click Me</button>\n` +
      '    Slider\n' +
      '  `,\n' +
      '})\n' +
      'export class CcustomSlider {\n' +
      '  @Input("valueChanged") changed = new EventEmitter<number>();\n' +
      '\n' +
      '  handleEvent(event: string) {\n' +
      '    this.changed.emit(90000);\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "app-root",\n' +
      '  standalone: true,\n' +
      '  imports: [AsyncPipe, CcustomSlider],\n' +
      '  template: `\n' +
      '    <ccustom-slider (valueChanged)="saveVolume()" />\n' +
      '    Signal Count {{ count() }}\n' +
      '\n' +
      '    Observable Count: {{ count$ | async }}\n' +
      '\n' +
      `    <button (click)="handleEvent('click')">Click Me</button>\n` +
      '  `,\n' +
      '})\n' +
      'export class AppComponent {\n' +
      '  count = count;\n' +
      '  count$ = toObservable(count);\n' +
      '\n' +
      '  handleEvent(event: string) {\n' +
      '    count.set(90000);\n' +
      '  }\n' +
      '\n' +
      '  saveVolume() {\n' +
      '    console.log("saveVolume");\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'bootstrapApplication(AppComponent);\n',
    fileName: 'src/main.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/main.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/main.ts',
    originalFileName: 'src/main.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(29) {
      'Attribute' => [SymbolObject],
      'ChangeDetectionStrategy' => [SymbolObject],
      'ChangeDetectorRef' => [SymbolObject],
      'Component' => [SymbolObject],
      'Injector' => [SymbolObject],
      'Signal' => [SymbolObject],
      'ViewContainerRef' => [SymbolObject],
      'WritableSignal' => [SymbolObject],
      'computed' => [SymbolObject],
      'effect' => [SymbolObject],
      'inject' => [SymbolObject],
      'signal' => [SymbolObject],
      'Input' => [SymbolObject],
      'Output' => [SymbolObject],
      'EventEmitter' => [SymbolObject],
      'Directive' => [SymbolObject],
      'bootstrapApplication' => [SymbolObject],
      'HeavyComponent' => [SymbolObject],
      'count' => [SymbolObject],
      'doubleCount' => [SymbolObject],
      'LoadingComponent' => [SymbolObject],
      'NgComponent' => [SymbolObject],
      'LazyComponent' => [SymbolObject],
      'Observable' => [SymbolObject],
      'of' => [SymbolObject],
      'toObservable' => [SymbolObject],
      'AsyncPipe' => [SymbolObject],
      'CcustomSlider' => [SymbolObject],
      'AppComponent' => [SymbolObject]
    },
    nextContainer: NodeObject {
      pos: 1028,
      end: 1094,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17409,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: [Map],
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 28062
    },
    endFlowNode: { flags: 512, antecedent: [Object], node: [NodeObject] },
    nodeCount: 190,
    identifierCount: 63,
    symbolCount: 52,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: undefined,
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 256,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(51) {
      'Attribute' => 'Attribute',
      'ChangeDetectionStrategy' => 'ChangeDetectionStrategy',
      'ChangeDetectorRef' => 'ChangeDetectorRef',
      'Component' => 'Component',
      'Injector' => 'Injector',
      'Signal' => 'Signal',
      'ViewContainerRef' => 'ViewContainerRef',
      'WritableSignal' => 'WritableSignal',
      'computed' => 'computed',
      'effect' => 'effect',
      'inject' => 'inject',
      'signal' => 'signal',
      'Input' => 'Input',
      'Output' => 'Output',
      'EventEmitter' => 'EventEmitter',
      'Directive' => 'Directive',
      '@angular/core' => '@angular/core',
      'bootstrapApplication' => 'bootstrapApplication',
      '@angular/platform-browser' => '@angular/platform-browser',
      'HeavyComponent' => 'HeavyComponent',
      'count' => 'count',
      'doubleCount' => 'doubleCount',
      './heavy-weight-component' => './heavy-weight-component',
      'LoadingComponent' => 'LoadingComponent',
      './loading-spinner' => './loading-spinner',
      'NgComponent' => 'NgComponent',
      './ng-component' => './ng-component',
      'LazyComponent' => 'LazyComponent',
      './lazy-component' => './lazy-component',
      'Observable' => 'Observable',
      'of' => 'of',
      'rxjs' => 'rxjs',
      'toObservable' => 'toObservable',
      '@angular/core/rxjs-interop' => '@angular/core/rxjs-interop',
      'AsyncPipe' => 'AsyncPipe',
      '@angular/common' => '@angular/common',
      'selector' => 'selector',
      'standalone' => 'standalone',
      'imports' => 'imports',
      'template' => 'template',
      'CcustomSlider' => 'CcustomSlider',
      'changed' => 'changed',
      'handleEvent' => 'handleEvent',
      'event' => 'event',
      'emit' => 'emit',
      'AppComponent' => 'AppComponent',
      'count$' => 'count$',
      'set' => 'set',
      'saveVolume' => 'saveVolume',
      'console' => 'console',
      'log' => 'log'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject]
    ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(29) {
      'Attribute',
      'ChangeDetectionStrategy',
      'ChangeDetectorRef',
      'Component',
      'Injector',
      'Signal',
      'ViewContainerRef',
      'WritableSignal',
      'computed',
      'effect',
      'inject',
      'signal',
      'Input',
      'Output',
      'EventEmitter',
      'Directive',
      'bootstrapApplication',
      'HeavyComponent',
      'count',
      'doubleCount',
      'LoadingComponent',
      'NgComponent',
      'LazyComponent',
      'Observable',
      'of',
      'toObservable',
      'AsyncPipe',
      'CcustomSlider',
      'AppComponent'
    },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24152,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/main"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 28047
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24134,
    mergeId: 0,
    flags: 32,
    escapedName: 'CcustomSlider',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(2) {
      'changed' => [SymbolObject],
      'handleEvent' => [SymbolObject]
    },
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24152,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/main"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'CcustomSlider',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24134,
      mergeId: 0,
      flags: 32,
      escapedName: 'CcustomSlider',
      declarations: [Array],
      exports: [Map],
      members: [Map],
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    },
    isReferenced: 1160127
  },
  modifiers: [
    NodeObject {
      pos: 754,
      end: 936,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 28048
    },
    TokenObject {
      pos: 936,
      end: 943,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 754,
    end: 943,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 949,
    end: 963,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'CcustomSlider',
    jsDoc: undefined,
    flowNode: { flags: 2050 },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [
    NodeObject {
      pos: 965,
      end: 1028,
      flags: 65536,
      modifierFlagsCache: 536903680,
      transformFlags: 50339873,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: [Array],
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [NodeObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 1028,
      end: 1094,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17409,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: [Map],
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 28062
    },
    pos: 965,
    end: 1094,
    hasTrailingComma: false,
    transformFlags: 50340897
  ],
  jsDoc: undefined
}
node: true CcustomSlider
node: <ref *1> NodeObject {
  pos: 1096,
  end: 1595,
  flags: 0,
  modifierFlagsCache: 536903712,
  transformFlags: 50340865,
  parent: <ref *2> SourceFileObject {
    pos: 0,
    end: 1633,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 50332705,
    parent: undefined,
    kind: 312,
    statements: [
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [Circular *1],
      [NodeObject],
      pos: 0,
      end: 1632,
      hasTrailingComma: false,
      transformFlags: 50332705
    ],
    endOfFileToken: TokenObject {
      pos: 1632,
      end: 1633,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 1
    },
    text: 'import {\n' +
      '  Attribute,\n' +
      '  ChangeDetectionStrategy,\n' +
      '  ChangeDetectorRef,\n' +
      '  Component,\n' +
      '  Injector,\n' +
      '  Signal,\n' +
      '  ViewContainerRef,\n' +
      '  WritableSignal,\n' +
      '  computed,\n' +
      '  effect,\n' +
      '  inject,\n' +
      '  signal,\n' +
      '  Input,\n' +
      '  Output,\n' +
      '  EventEmitter,\n' +
      '  Directive,\n' +
      '} from "@angular/core";\n' +
      'import { bootstrapApplication } from "@angular/platform-browser";\n' +
      'import { HeavyComponent, count, doubleCount } from "./heavy-weight-component";\n' +
      'import { LoadingComponent } from "./loading-spinner";\n' +
      'import { NgComponent } from "./ng-component";\n' +
      'import { LazyComponent } from "./lazy-component";\n' +
      'import { Observable, of } from "rxjs";\n' +
      '// import { ExampleComponent } from "./example.component";\n' +
      '\n' +
      'import { toObservable } from "@angular/core/rxjs-interop";\n' +
      'import { AsyncPipe } from "@angular/common";\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "ccustom-slider",\n' +
      '  standalone: true,\n' +
      '  imports: [AsyncPipe],\n' +
      '  template: `\n' +
      `    <button (click)="handleEvent('click')">Click Me</button>\n` +
      '    Slider\n' +
      '  `,\n' +
      '})\n' +
      'export class CcustomSlider {\n' +
      '  @Input("valueChanged") changed = new EventEmitter<number>();\n' +
      '\n' +
      '  handleEvent(event: string) {\n' +
      '    this.changed.emit(90000);\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      '@Component({\n' +
      '  selector: "app-root",\n' +
      '  standalone: true,\n' +
      '  imports: [AsyncPipe, CcustomSlider],\n' +
      '  template: `\n' +
      '    <ccustom-slider (valueChanged)="saveVolume()" />\n' +
      '    Signal Count {{ count() }}\n' +
      '\n' +
      '    Observable Count: {{ count$ | async }}\n' +
      '\n' +
      `    <button (click)="handleEvent('click')">Click Me</button>\n` +
      '  `,\n' +
      '})\n' +
      'export class AppComponent {\n' +
      '  count = count;\n' +
      '  count$ = toObservable(count);\n' +
      '\n' +
      '  handleEvent(event: string) {\n' +
      '    count.set(90000);\n' +
      '  }\n' +
      '\n' +
      '  saveVolume() {\n' +
      '    console.log("saveVolume");\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'bootstrapApplication(AppComponent);\n',
    fileName: 'src/main.ts',
    path: '/users/chidumennamdi/documents/developerse/my-angular/test/src/main.ts',
    resolvedPath: '/users/chidumennamdi/documents/developerse/my-angular/test/src/main.ts',
    originalFileName: 'src/main.ts',
    languageVersion: 99,
    languageVariant: 0,
    scriptKind: 3,
    isDeclarationFile: false,
    hasNoDefaultLib: false,
    locals: Map(29) {
      'Attribute' => [SymbolObject],
      'ChangeDetectionStrategy' => [SymbolObject],
      'ChangeDetectorRef' => [SymbolObject],
      'Component' => [SymbolObject],
      'Injector' => [SymbolObject],
      'Signal' => [SymbolObject],
      'ViewContainerRef' => [SymbolObject],
      'WritableSignal' => [SymbolObject],
      'computed' => [SymbolObject],
      'effect' => [SymbolObject],
      'inject' => [SymbolObject],
      'signal' => [SymbolObject],
      'Input' => [SymbolObject],
      'Output' => [SymbolObject],
      'EventEmitter' => [SymbolObject],
      'Directive' => [SymbolObject],
      'bootstrapApplication' => [SymbolObject],
      'HeavyComponent' => [SymbolObject],
      'count' => [SymbolObject],
      'doubleCount' => [SymbolObject],
      'LoadingComponent' => [SymbolObject],
      'NgComponent' => [SymbolObject],
      'LazyComponent' => [SymbolObject],
      'Observable' => [SymbolObject],
      'of' => [SymbolObject],
      'toObservable' => [SymbolObject],
      'AsyncPipe' => [SymbolObject],
      'CcustomSlider' => [SymbolObject],
      'AppComponent' => [SymbolObject]
    },
    nextContainer: NodeObject {
      pos: 1028,
      end: 1094,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 17409,
      parent: [NodeObject],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: [Map],
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined,
      id: 28062
    },
    endFlowNode: { flags: 512, antecedent: [Object], node: [NodeObject] },
    nodeCount: 190,
    identifierCount: 63,
    symbolCount: 52,
    parseDiagnostics: [],
    bindDiagnostics: [],
    bindSuggestionDiagnostics: undefined,
    lineMap: undefined,
    externalModuleIndicator: NodeObject {
      pos: 0,
      end: 256,
      flags: 0,
      modifierFlagsCache: 536870912,
      transformFlags: 0,
      parent: [Circular *2],
      kind: 272,
      modifiers: undefined,
      importClause: [NodeObject],
      moduleSpecifier: [NodeObject],
      assertClause: undefined,
      attributes: undefined,
      jsDoc: undefined
    },
    setExternalModuleIndicator: [Function: callback],
    pragmas: Map(0) {},
    checkJsDirective: undefined,
    referencedFiles: [],
    typeReferenceDirectives: [],
    libReferenceDirectives: [],
    amdDependencies: [],
    commentDirectives: undefined,
    identifiers: Map(51) {
      'Attribute' => 'Attribute',
      'ChangeDetectionStrategy' => 'ChangeDetectionStrategy',
      'ChangeDetectorRef' => 'ChangeDetectorRef',
      'Component' => 'Component',
      'Injector' => 'Injector',
      'Signal' => 'Signal',
      'ViewContainerRef' => 'ViewContainerRef',
      'WritableSignal' => 'WritableSignal',
      'computed' => 'computed',
      'effect' => 'effect',
      'inject' => 'inject',
      'signal' => 'signal',
      'Input' => 'Input',
      'Output' => 'Output',
      'EventEmitter' => 'EventEmitter',
      'Directive' => 'Directive',
      '@angular/core' => '@angular/core',
      'bootstrapApplication' => 'bootstrapApplication',
      '@angular/platform-browser' => '@angular/platform-browser',
      'HeavyComponent' => 'HeavyComponent',
      'count' => 'count',
      'doubleCount' => 'doubleCount',
      './heavy-weight-component' => './heavy-weight-component',
      'LoadingComponent' => 'LoadingComponent',
      './loading-spinner' => './loading-spinner',
      'NgComponent' => 'NgComponent',
      './ng-component' => './ng-component',
      'LazyComponent' => 'LazyComponent',
      './lazy-component' => './lazy-component',
      'Observable' => 'Observable',
      'of' => 'of',
      'rxjs' => 'rxjs',
      'toObservable' => 'toObservable',
      '@angular/core/rxjs-interop' => '@angular/core/rxjs-interop',
      'AsyncPipe' => 'AsyncPipe',
      '@angular/common' => '@angular/common',
      'selector' => 'selector',
      'standalone' => 'standalone',
      'imports' => 'imports',
      'template' => 'template',
      'CcustomSlider' => 'CcustomSlider',
      'changed' => 'changed',
      'handleEvent' => 'handleEvent',
      'event' => 'event',
      'emit' => 'emit',
      'AppComponent' => 'AppComponent',
      'count$' => 'count$',
      'set' => 'set',
      'saveVolume' => 'saveVolume',
      'console' => 'console',
      'log' => 'log'
    },
    packageJsonLocations: undefined,
    packageJsonScope: undefined,
    imports: [
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject],
      [NodeObject]
    ],
    moduleAugmentations: [],
    ambientModuleNames: [],
    classifiableNames: Set(29) {
      'Attribute',
      'ChangeDetectionStrategy',
      'ChangeDetectorRef',
      'Component',
      'Injector',
      'Signal',
      'ViewContainerRef',
      'WritableSignal',
      'computed',
      'effect',
      'inject',
      'signal',
      'Input',
      'Output',
      'EventEmitter',
      'Directive',
      'bootstrapApplication',
      'HeavyComponent',
      'count',
      'doubleCount',
      'LoadingComponent',
      'NgComponent',
      'LazyComponent',
      'Observable',
      'of',
      'toObservable',
      'AsyncPipe',
      'CcustomSlider',
      'AppComponent'
    },
    impliedNodeFormat: undefined,
    jsDocParsingMode: 0,
    symbol: SymbolObject {
      id: 24152,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/main"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [Circular *2]
    },
    id: 28047
  },
  kind: 263,
  symbol: SymbolObject {
    id: 24144,
    mergeId: 0,
    flags: 32,
    escapedName: 'AppComponent',
    declarations: [ [Circular *1] ],
    exports: Map(1) { 'prototype' => [SymbolObject] },
    members: Map(4) {
      'count' => [SymbolObject],
      'count$' => [SymbolObject],
      'handleEvent' => [SymbolObject],
      'saveVolume' => [SymbolObject]
    },
    valueDeclaration: [Circular *1],
    parent: SymbolObject {
      id: 24152,
      mergeId: 0,
      flags: 512,
      escapedName: '"src/main"',
      declarations: [Array],
      exports: [Map],
      valueDeclaration: [SourceFileObject]
    }
  },
  localSymbol: SymbolObject {
    id: 0,
    mergeId: 0,
    flags: 1048576,
    escapedName: 'AppComponent',
    declarations: [ [Circular *1] ],
    parent: undefined,
    exportSymbol: SymbolObject {
      id: 24144,
      mergeId: 0,
      flags: 32,
      escapedName: 'AppComponent',
      declarations: [Array],
      exports: [Map],
      members: [Map],
      valueDeclaration: [Circular *1],
      parent: [SymbolObject]
    },
    isReferenced: 1160127
  },
  modifiers: [
    NodeObject {
      pos: 1096,
      end: 1405,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 33563649,
      parent: [Circular *1],
      kind: 170,
      expression: [NodeObject],
      id: 28065
    },
    TokenObject {
      pos: 1405,
      end: 1412,
      flags: 0,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: [Circular *1],
      kind: 95
    },
    pos: 1096,
    end: 1412,
    hasTrailingComma: false,
    transformFlags: 33563649
  ],
  name: IdentifierObject {
    pos: 1418,
    end: 1431,
    flags: 0,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: [Circular *1],
    kind: 80,
    escapedText: 'AppComponent',
    jsDoc: undefined,
    flowNode: { flags: 2050 },
    symbol: undefined
  },
  typeParameters: undefined,
  heritageClauses: undefined,
  members: [
    NodeObject {
      pos: 1433,
      end: 1450,
      flags: 65536,
      modifierFlagsCache: 536870912,
      transformFlags: 16777216,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [IdentifierObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 1450,
      end: 1482,
      flags: 65536,
      modifierFlagsCache: 536870912,
      transformFlags: 16777216,
      parent: [Circular *1],
      kind: 172,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      type: undefined,
      initializer: [NodeObject],
      jsDoc: undefined
    },
    NodeObject {
      pos: 1482,
      end: 1540,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 1025,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: [Map],
      nextContainer: [NodeObject],
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined
    },
    NodeObject {
      pos: 1540,
      end: 1593,
      flags: 66048,
      modifierFlagsCache: 536870912,
      transformFlags: 1024,
      parent: [Circular *1],
      kind: 174,
      symbol: [SymbolObject],
      localSymbol: undefined,
      modifiers: undefined,
      asteriskToken: undefined,
      name: [IdentifierObject],
      questionToken: undefined,
      exclamationToken: undefined,
      typeParameters: undefined,
      parameters: [Array],
      type: undefined,
      body: [NodeObject],
      typeArguments: undefined,
      jsDoc: [Array],
      locals: Map(0) {},
      nextContainer: undefined,
      flowNode: undefined,
      endFlowNode: [Object],
      returnFlowNode: undefined
    },
    pos: 1433,
    end: 1593,
    hasTrailingComma: false,
    transformFlags: 16778241
  ],
  jsDoc: undefined
}
node: true AppComponent
