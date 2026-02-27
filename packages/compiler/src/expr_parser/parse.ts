import * as ts from 'typescript';
import {i0, ɵɵelementEnd} from "../constants/constants";

function visitCallExpressionArguments(node: ts.CallExpression) {
    return node.arguments.map(arg => {
        if (ts.isIdentifier(arg)) {
            return ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier('ctx'),
                arg
            );
        }
        return arg;
    });

}

export function createTransformer(ctxVariable: string, implicitVariables: string[] = []) {
    return (context: ts.TransformationContext) => {
        const visitor: ts.Visitor = (node: ts.Node): ts.Node => {

            if (ts.isStringLiteral(node)) {
                return ts.factory.createStringLiteral(node.text);
            }

            if (ts.isNumericLiteral(node)) {
                return ts.factory.createNumericLiteral(node.text);
            }

            if(ts.isIdentifier(node)) {

                if (implicitVariables.flat(Infinity).includes(node.text)) {
                    const currentImplicit = implicitVariables[1];
                    const parentImplicits = implicitVariables[0] ?? [];

                    if (node.text === currentImplicit) {
                        return ts.factory.createPropertyAccessExpression(
                            ts.factory.createIdentifier(ctxVariable),
                            ts.factory.createIdentifier("$implicit")
                        );
                    }

                    if ((parentImplicits as any[]).flat(Infinity).includes(node.text)) {
                        return generateNextContextNode(getContextLevel(parentImplicits as any[], node.text));
                    }

                    // return ts.factory.createPropertyAccessExpression(
                    //     ts.factory.createPropertyAccessExpression(
                    //         ts.factory.createIdentifier(ctxVariable),
                    //         ts.factory.createIdentifier("$implicit")
                    //     ),
                    //     node,
                    // )
                }

                return ts.factory.createPropertyAccessExpression(
                    ts.factory.createIdentifier(ctxVariable),
                    node
                );
            }

            if (ts.isIdentifier(node) && ts.isExpressionStatement(node?.parent) && !isParameter(node)) {

                return ts.factory.createPropertyAccessExpression(
                    ts.factory.createIdentifier(ctxVariable),
                    node
                );
            }

            // If the node is an identifier (and not a property name or parameter declaration), prefix it with ctx.
            if (ts.isIdentifier(node) && !isPropertyName(node) && !isParameter(node)) {
                return ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(ctxVariable), node);
            }

            if (ts.isPropertyAccessExpression(node)) {

                const currentImplicit = implicitVariables[1];
                const parentImplicits = (implicitVariables[0] ?? []) as any[];

                const root = getRootIdentifier(node);

                if (!root) return node;

                let base

                if (currentImplicit == root.text) {

                    base = ts.factory.createPropertyAccessExpression(
                            ts.factory.createIdentifier(ctxVariable),
                            "$implicit"
                        )

                } else if (parentImplicits.flat(Infinity).includes(root.text)) {
                    base = generateNextContextNode(getContextLevel(parentImplicits as any[], root.text));
                }

                return rebuildWithNewRoot(node, base);
            }

            // Handle property access expressions (e.g., a.b.c)
            if (ts.isPropertyAccessExpression(node)) {
                return ts.factory.createPropertyAccessExpression(
                    // @ts-ignore
                    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(ctxVariable), node.expression),
                    node.name
                );
            }

            // Handle element access expressions (e.g., a[b])
            if (ts.isElementAccessExpression(node)) {
                return ts.factory.createElementAccessExpression(
                    // @ts-ignore
                    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(ctxVariable), node.expression),
                    node.argumentExpression
                );
            }

            // Handle call expressions (e.g., call(a, b))
            if (ts.isCallExpression(node)) {
                return ts.factory.createCallExpression(
                    // @ts-ignore
                    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(ctxVariable), node.expression),
                    node.typeArguments,
                    //visitCallExpressionArguments(node)
                    // @ts-ignore
                    node.arguments.map(arg => ts.visitNode(arg, visitor))
                );
            }

            // Handle new expressions (e.g., new Class())
            if (ts.isNewExpression(node)) {
                return ts.factory.createNewExpression(
                    // @ts-ignore
                    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier(ctxVariable), node.expression),
                    node.typeArguments,
                    // @ts-ignore
                    node.arguments ? node.arguments.map(arg => ts.visitNode(arg, visitor)) : undefined
                );
            }

            // Handle object literal expressions
            if (ts.isObjectLiteralExpression(node)) {
                return ts.factory.updateObjectLiteralExpression(
                    node,
                    node.properties.map(prop => ts.visitNode(prop, visitor) as ts.ObjectLiteralElementLike)
                );
            }

            // Handle array literal expressions
            if (ts.isArrayLiteralExpression(node)) {
                return ts.factory.updateArrayLiteralExpression(
                    node,
                    // @ts-ignore
                    node.elements.map(elem => ts.visitNode(elem, visitor))
                );
            }

            // For all other nodes, continue visiting recursively
            return ts.visitEachChild(node, visitor, context);
        };

        return (node: ts.Node) => ts.visitNode(node, visitor);
    };
}

function generateNextContextNode(level: number) {
    return ts.factory.createPropertyAccessExpression(
        ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier(i0),
                ts.factory.createIdentifier("ɵɵnextContext")
            ),
            undefined,
            [
                ts.factory.createNumericLiteral(level),
            ]
        ),
        ts.factory.createIdentifier("$implicit")
    );
}

// function generateNextContextNode(level: number) {
//     console.log(level)
//     return ts.factory.createExpressionStatement(
//         ts.factory.createPropertyAccessExpression(
//         ts.factory.createCallExpression(
//             ts.factory.createPropertyAccessExpression(
//                 ts.factory.createIdentifier(i0),
//                 ts.factory.createIdentifier("ɵɵnextContext")
//             ),
//             undefined,
//             [
//                 ts.factory.createNumericLiteral(level),
//             ]
//         ),
//             "$implicit"
//     )
//     );
// }

function getContextLevel(
    implicitVariables: any[],
    variableText: string
): number {

    if (!implicitVariables) return -1;

    const current = implicitVariables[1];
    const parent = implicitVariables[0];

    // Found at current level
    if (current === variableText) {
        return 0;
    }

    // Search parent recursively
    if (Array.isArray(parent)) {
        const parentLevel = getContextLevel(parent, variableText);

        if (parentLevel !== -1) {
            return parentLevel + 1;
        }
    }

    return -1;
}

// Helper function to check if a node is a property name
function isPropertyName(node: ts.Node): boolean {
    return ts.isPropertyName(node) || ts.isShorthandPropertyAssignment(node);
}

// Helper function to check if a node is a parameter declaration
function isParameter(node: ts.Node): boolean {
    return ts.isParameter(node.parent);
}

function getRootIdentifier(node: ts.Expression): ts.Identifier | null {
    let current = node;

    while (ts.isPropertyAccessExpression(current)) {
        current = current.expression;
    }

    return ts.isIdentifier(current) ? current : null;
}

function rebuildWithNewRoot(
    node: ts.PropertyAccessExpression,
    newRoot: ts.Expression
): ts.Expression {
    const parts: string[] = [];

    let current: ts.Expression = node;

    while (ts.isPropertyAccessExpression(current)) {
        parts.unshift(current.name.text);
        current = current.expression;
    }

    // current is root identifier
    let result: ts.Expression = newRoot;

    for (const part of parts) {
        result = ts.factory.createPropertyAccessExpression(result, part);
    }

    return result;
}

// Function to transform JavaScript code
function transformCode(code: string, ctxVariable: string): string {
    const sourceFile = ts.createSourceFile('temp.ts', code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const result = ts.transform(sourceFile, [createTransformer(ctxVariable, [])]);
    const printer = ts.createPrinter();
    const transformedSourceFile = result.transformed[0];
    // @ts-ignore

    return printer.printFile(transformedSourceFile);
}

// Example usage
// const code = `a.b.c; a; a.b; b?.c; b['ui']; f[9]; console.log(90); call(x.x, y); 9*8; 9; tt == 5; /* new Obj(); [1, 2, 3]; { key: value };*/`;
// const transformedCode = transformCode(code, 'ctx');
// console.log(transformedCode);

