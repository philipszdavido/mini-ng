import * as ts from "typescript";

function ngComponentTransformer(): ts.TransformerFactory<ts.SourceFile> {
  return (context): any => {
    const visit: ts.Visitor = (node: ts.Node): ts.Node => {
      // Check if the node is a class declaration with @Component decorator
      if (ts.isClassDeclaration(node) && node.decorators) {
        const componentDecorator = node.decorators.find(
          (decorator) =>
            ts.isCallExpression(decorator.expression) &&
            ts.isIdentifier(decorator.expression.expression) &&
            decorator.expression.expression.text === "Component"
        );

        if (componentDecorator) {
          // Extract component metadata from the decorator
          const metadata = componentDecorator.expression
            .arguments[0] as ts.ObjectLiteralExpression;
          const selector = metadata.properties.find(
            (prop: ts.PropertyAssignment) => prop.name.getText() === "selector"
          );
          const standalone = metadata.properties.find(
            (prop: ts.PropertyAssignment) =>
              prop.name.getText() === "standalone"
          );
          const template = metadata.properties.find(
            (prop: ts.PropertyAssignment) => prop.name.getText() === "template"
          );

          const className = node.name?.text;

          if (className && selector && template) {
            // Create static ɵfac and ɵcmp properties
            const factoryFunction = ts.createMethod(
              undefined,
              [ts.createModifier(ts.SyntaxKind.StaticKeyword)],
              undefined,
              "ɵfac",
              undefined,
              undefined,
              [ts.createParameter(undefined, undefined, undefined, "t")],
              undefined,
              ts.createBlock([
                ts.createReturn(
                  ts.createNew(ts.createIdentifier(className), undefined, [
                    ts.createIdentifier("t"),
                    ts.createToken(ts.SyntaxKind.BarBarToken),
                    ts.createIdentifier(className),
                  ])
                ),
              ])
            );

            const defineComponentCall = ts.createCall(
              ts.createPropertyAccess(
                ts.createIdentifier("i0"),
                "ɵɵdefineComponent"
              ),
              undefined,
              [
                ts.createObjectLiteral(
                  [
                    ts.createPropertyAssignment(
                      "type",
                      ts.createIdentifier(className)
                    ),
                    ts.createPropertyAssignment(
                      "selectors",
                      ts.createArrayLiteral([
                        ts.createArrayLiteral([
                          ts.createStringLiteral(
                            (selector.initializer as ts.StringLiteral).text
                          ),
                        ]),
                      ])
                    ),
                    standalone
                      ? ts.createPropertyAssignment(
                          "standalone",
                          ts.createTrue()
                        )
                      : undefined,
                    ts.createPropertyAssignment(
                      "template",
                      ts.createFunctionExpression(
                        undefined,
                        undefined,
                        "NgComponent_Template",
                        undefined,
                        [
                          ts.createParameter(
                            undefined,
                            undefined,
                            undefined,
                            "rf"
                          ),
                          ts.createParameter(
                            undefined,
                            undefined,
                            undefined,
                            "ctx"
                          ),
                        ],
                        undefined,
                        ts.createBlock([
                          ts.createIf(
                            ts.createBinary(
                              ts.createIdentifier("rf"),
                              ts.createToken(ts.SyntaxKind.AmpersandToken),
                              ts.createNumericLiteral("1")
                            ),
                            ts.createBlock([
                              ts.createStatement(
                                ts.createCall(
                                  ts.createPropertyAccess(
                                    ts.createIdentifier("i0"),
                                    "ɵɵtext"
                                  ),
                                  undefined,
                                  [
                                    ts.createNumericLiteral("0"),
                                    ts.createStringLiteral(
                                      (template.initializer as ts.StringLiteral)
                                        .text
                                    ),
                                  ]
                                )
                              ),
                            ])
                          ),
                        ])
                      )
                    ),
                    ts.createPropertyAssignment(
                      "encapsulation",
                      ts.createNumericLiteral("2")
                    ),
                  ].filter(Boolean)
                ),
              ]
            );

            const defineComponentStatic = ts.createMethod(
              undefined,
              [ts.createModifier(ts.SyntaxKind.StaticKeyword)],
              undefined,
              "ɵcmp",
              undefined,
              undefined,
              [],
              undefined,
              ts.createBlock([
                ts.createExpressionStatement(defineComponentCall),
              ])
            );

            // Append static properties to the class
            return ts.updateClassDeclaration(
              node,
              node.decorators,
              node.modifiers,
              node.name,
              node.typeParameters,
              node.heritageClauses,
              ts.createNodeArray([
                ...node.members,
                factoryFunction,
                defineComponentStatic,
              ])
            );
          }
        }
      }

      return ts.visitEachChild(node, visit, context);
    };

    return (node) => ts.visitNode(node, visit);
  };
}

export default ngComponentTransformer;
