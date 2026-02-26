import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

export function createNewProject(projectName: string) {
    if (!projectName) {
        console.error("❌ Please provide a project name.");
        process.exit(1);
    }

    const projectPath = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
        console.error("❌ Folder already exists.");
        process.exit(1);
    }

    console.log(`🚀 Creating project: ${projectName}`);

    createProjectStructure(projectPath, projectName);

    console.log("📦 Installing dependencies...");
    execSync("npm install", { cwd: projectPath, stdio: "inherit" });

    console.log("✅ Project created successfully!");

}

function createProjectStructure(projectPath: string, name: string) {
    fs.mkdirSync(projectPath);
    fs.mkdirSync(path.join(projectPath, "src"));
    fs.mkdirSync(path.join(projectPath, "src/app"), { recursive: true });

    createPackageJson(projectPath, name);
    createTsConfig(projectPath);
    createMainFile(projectPath);
    createAppComponent(projectPath);
}

function createPackageJson(projectPath: string, name: string) {
    const pkg = {
        name,
        version: "1.0.0",
        scripts: {
            build: "tsc",
            start: "node dist/main.js"
        },
        dependencies: {},
        devDependencies: {
            typescript: "^5.0.0"
        }
    };

    fs.writeFileSync(
        path.join(projectPath, "package.json"),
        JSON.stringify(pkg, null, 2)
    );
}

function createTsConfig(projectPath: string) {
    const tsconfig = {
        compilerOptions: {
            target: "ES2020",
            module: "CommonJS",
            outDir: "dist",
            rootDir: "src",
            strict: true
        }
    };

    fs.writeFileSync(
        path.join(projectPath, "tsconfig.json"),
        JSON.stringify(tsconfig, null, 2)
    );
}

function createMainFile(projectPath: string) {
    const content = `console.log("App started 🚀");`;

    fs.writeFileSync(
        path.join(projectPath, "src/main.ts"),
        content
    );
}

function createAppComponent(projectPath: string) {
    const content = `
export class AppComponent {
  constructor() {
    console.log("AppComponent initialized");
  }
}
`;

    fs.writeFileSync(
        path.join(projectPath, "src/app/app.component.ts"),
        content
    );
}

