import ts from "typescript";
import * as path from "path";
import fs from "fs";

export function createProgram(rootFiles: string[]) {
    const options: ts.CompilerOptions = {
        // sourceMap: true,
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
        useDefineForClassFields: true,
        experimentalDecorators: true,
        emitDecoratorMetadata: false,
        removeComments: true,
        outDir: "./dist",

    };

    const host = ts.createCompilerHost(options);

    const program = ts.createProgram(rootFiles, options, host);

    return program;
}
