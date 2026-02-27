import ts from "typescript";

export function createProgram(rootFiles: string[]) {
    const options: ts.CompilerOptions = {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
        sourceMap: true
    };

    const host = ts.createCompilerHost(options);

    const program = ts.createProgram(rootFiles, options, host);

    return program;
}
