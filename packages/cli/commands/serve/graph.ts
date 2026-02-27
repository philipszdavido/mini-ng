import fs from "fs";
import path from "path";

export class DependencyGraph {
    private graph = new Map<string, Set<string>>();

    constructor(private root: string) {}

    build() {
        this.walk(this.root);
    }

    private walk(dir: string) {
        for (const file of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                this.walk(fullPath);
            } else if (file.endsWith(".ts") || file.endsWith(".js")) {
                const content = fs.readFileSync(fullPath, "utf8");
                const deps = this.extractImports(content, fullPath);

                this.graph.set(fullPath, deps);
            }
        }
    }

    private extractImports(code: string, from: string): Set<string> {
        const regex = /import\s+.*?from\s+["'](.+?)["']/g;
        const deps = new Set<string>();
        let match;

        while ((match = regex.exec(code))) {
            let resolved = path.resolve(path.dirname(from), match[1]);
            if (!resolved.endsWith(".ts") && !resolved.endsWith(".js")) {
                resolved += ".ts";
            }
            deps.add(resolved);
        }

        return deps;
    }

    getDependents(file: string): string[] {
        const affected: string[] = [];

        for (const [module, deps] of this.graph.entries()) {
            if (deps.has(file)) {
                affected.push(module);
            }
        }

        return affected;
    }
}
