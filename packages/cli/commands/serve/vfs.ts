import fs from "fs";
import path from "path";

export class VirtualFileSystem {
    private files = new Map<string, string>();

    constructor(private root: string) {}

    loadAll() {
        this.walk(this.root);
    }

    private walk(dir: string) {
        for (const file of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                this.walk(fullPath);
            } else {
                const content = fs.readFileSync(fullPath, "utf8");
                this.files.set(fullPath, content);
            }
        }
    }

    read(filePath: string) {
        return this.files.get(filePath);
    }

    update(filePath: string, content: string) {
        this.files.set(filePath, content);
    }

    has(filePath: string) {
        return this.files.has(filePath);
    }
}
