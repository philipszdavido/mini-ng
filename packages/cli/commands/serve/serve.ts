// import chokidar from "chokidar";
// import path from "path";
// import fs from "fs";
// import http from "http";
//
// import { VirtualFileSystem } from "../dev/vfs";
// import { DependencyGraph } from "../dev/graph";
// import { HMRServer } from "../dev/hmr";
//
// export function handleServe(args: string[]) {
//     const root = process.cwd();
//     const dist = path.join(root, "dist");
//
//     const vfs = new VirtualFileSystem(dist);
//     vfs.loadAll();
//
//     const graph = new DependencyGraph(dist);
//     graph.build();
//
//     const hmr = new HMRServer(24678);
//
//     const server = http.createServer((req, res) => {
//         let filePath = path.join(
//             dist,
//             req.url === "/" ? "index.html" : req.url!
//         );
//
//         if (!vfs.has(filePath)) {
//             res.writeHead(404);
//             res.end("Not Found");
//             return;
//         }
//
//         let content = vfs.read(filePath)!;
//
//         if (filePath.endsWith(".html")) {
//             content += `
//         <script>
//           const ws = new WebSocket("ws://localhost:24678");
//           ws.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             if (data.type === "update") {
//               location.reload();
//             }
//           };
//         </script>
//       `;
//         }
//
//         res.writeHead(200);
//         res.end(content);
//     });
//
//     server.listen(4200, () =>
//         console.log("🚀 Dev server running on http://localhost:4200")
//     );
//
//     chokidar.watch(dist).on("change", (file) => {
//         console.log("♻ File changed:", file);
//
//         const content = fs.readFileSync(file, "utf8");
//         vfs.update(file, content);
//
//         const affected = graph.getDependents(file);
//
//         console.log("🔎 Affected modules:", affected);
//
//         hmr.sendUpdate(file);
//     });
// }

import * as path from "path";
import * as glob from "glob";
import { createProgram } from "compiler"
import {transformPlugin} from "compiler/dist/visitor/visitor";
import {VirtualFileSystem} from "./vfs";
import * as http from "node:http";
import {bundleProject} from "compiler/dist/bundle-vite";
import fs from "fs";
// import { build } from "vite";
// import type { Plugin } from "vite";
// import { build } from "esbuild";

export async function serveAction() {
    const projectRoot = process.cwd();
    const distDir = path.join(projectRoot, "dist");
    const projectPath = path.resolve(process.cwd(), projectRoot);

    const tsFiles = glob.sync("src/**/*.ts");

    const program = createProgram(tsFiles);
    // const vfs = new VirtualFileSystem("/")

    // Add this before calling `bundleFromMemory`
//     const virtualIndexHtmlPath = "/index.html";
//     vfs.update(virtualIndexHtmlPath, `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>My MNGC App</title>
// </head>
// <body>
//   <div id="app"></div>
// <!--  <script type="module" src="/src/main.ts"></script>-->
// </body>
// </html>
// `);

//     const virtualIndexHtmlPath = "src/main.js";
//     vfs.update(virtualIndexHtmlPath, `
//   console.log("Hello from mngc 🚀");
// `);

    const currentDirectory = process.cwd();
    console.log("Current Directory:", currentDirectory);
    console.log(tsFiles)

    const options = {
        rootDir: path.resolve(projectRoot, "src"),
        outDir: path.resolve(projectRoot, "dist"),
    };

    program.emit(undefined, (fileName, data) => {
        // fileName is what TS thinks the output path is
        // We recompute to guarantee mirror structure

        const rootDir = options.rootDir!;
        const outDir = options.outDir!;

        // Get relative path from rootDir
        const relativePath = path.relative(rootDir, fileName);

        // Ensure .js extension
        const jsPath = relativePath.replace(/\.ts$/, ".js");

        // Final output path
        const outputPath = path.join(outDir, jsPath);

        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, data);

        console.log("Emitted:", outputPath);
    }, undefined, undefined, {
        before: [transformPlugin(program)],
    });

    console.log(`🚀 Starting mngc dev server...`);
    console.log(`📦 Watching TypeScript files...`);

    // createServer(vfs).then()

    // bundleFromMemory(virtualIndexHtmlPath, vfs)
    //     .then()

    bundleProject(process.cwd()).then()

}

async function createServer(vfs: VirtualFileSystem) {
    const server = http.createServer(async (req, res) => {

        const bundle = await bundleFromMemory(
            "/absolute/path/to/main.js",
            vfs
        );

        res.end(bundle.code);

    });
}

// export async function bundleProject(projectDir: string) {
//     console.log("Bundling project in:", projectDir);
//
//     const distDir = path.join(projectDir, "dist");
//
//     try {
//         const { build } = await import("vite");
//
//         const result = await build({
//             root: projectDir,
//             logLevel: "info",
//
//             build: {
//                 write: false, // 🚀 DO NOT EMIT FILES
//                 emptyOutDir: false,
//
//                 rollupOptions: {
//                     input: path.join(distDir, "main.js"),
//                     output: {
//                         format: "es",
//                         entryFileNames: "bundle.mjs",
//                         inlineDynamicImports: true,
//                         sourcemap: true,
//                     },
//                 },
//
//                 target: "es2018",
//                 minify: "terser",
//                 sourcemap: true,
//             },
//
//             resolve: {
//                 extensions: [".js", ".ts", ".mjs"],
//                 conditions: ["browser", "module", "import"],
//             },
//         });
//
//         // 🔥 Vite returns RollupOutput when write: false
//         const output = Array.isArray(result)
//             ? result[0].output
//             : result.output;
//
//         const bundleFile = output.find(
//             (file: any) => file.type === "chunk"
//         );
//
//         if (!bundleFile) {
//             throw new Error("No bundle chunk found");
//         }
//
//         console.log("✅ Bundle created in memory");
//
//         return {
//             code: bundleFile.code,
//             map: bundleFile.map,
//         };
//
//     } catch (err) {
//         console.error("❌ Bundle failed:", err);
//         throw err;
//     }
// }

export function vfsPlugin(vfs: any) {

    const projectRoot = process.cwd().replace(/\\/g, "/");

    return {
        name: "mngc-vfs",

        // resolveId(source: any, importer: any) {
        //     if (!importer) return source;
        //
        //     const resolved = path.resolve(
        //         path.dirname(importer),
        //         source
        //     );
        //
        //     console.log(source, importer, resolved)
        //
        //     if (vfs.has(resolved)) {
        //         return resolved;
        //     }
        //
        //     return null;
        // },

        resolveId(source: any, importer: any) {
            console.log("vfsPlugin", source, importer);

            if (source === "@mini-ng/core") { return ""}
            if (vfs.has(source)) return source;

            if (importer) {

                const normalizedImporter = importer
                    .replace(projectRoot, "")
                    .replace(/\\/g, "");

                const resolved = path.posix.join(
                    path.posix.dirname(normalizedImporter),
                    source
                );

                if (vfs.has(resolved)) return resolved;
            }

            return null;
        },

        load(id: any) {
            // console.log("id: ",id)
            if (vfs.has(id)) {
                return vfs.read(id); // 🔥 return JS from memory
            }

            return null;
        },
        transform(src: any, id: any) {
            // console.log(src, id)
        }
    };
}

export async function bundleFromMemory(entry: string, vfs: any) {

    const { build } = await import("vite");

    const result = await build({
        publicDir: false,
        appType: "custom",
        logLevel: "info",
        root: "/",
        plugins: [vfsPlugin(vfs)],

        build: {
            write: false, // 🔥 DO NOT EMIT FILES
            emptyOutDir: false,

            rollupOptions: {
                input: entry,
                output: {
                    format: "es",
                    inlineDynamicImports: true,
                    // sourcemap: true,
                },
            },

            sourcemap: true,
            minify: false,
            target: "es2018",
        },
    });

    console.log(result);

    // const output = result[0].output
    const output = Array.isArray(result)
        ? result[0].output
        : (result as any).output;

    const chunk = output.find(
        (file: any) => file.type === "chunk"
    );

    return {
        code: chunk.code,
        map: chunk.map,
    };
}
