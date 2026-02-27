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

export function serveAction() {
    const projectRoot = process.cwd();
    const distDir = path.join(projectRoot, "dist");

    const tsFiles = glob.sync("src/**/*.ts");

    createProgram(tsFiles);

    console.log(`🚀 Starting mngc dev server...`);
    console.log(`📦 Watching TypeScript files...`);
}
