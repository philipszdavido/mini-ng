import * as path from "path";

export async function bundleProject(projectDir: string) {
  console.log("Bundling project in:", projectDir);

  const distDir = path.join(projectDir, "dist");

  try {
    // 👇 dynamic ESM import (THIS FIXES THE ERROR)
    const { build } = await import("vite");

    await build({
      root: projectDir,
      logLevel: "info",

      build: {
        outDir: projectDir,
        emptyOutDir: false,

        rollupOptions: {
          input: path.join(distDir, "main.js"),
          output: {
            format: "es",
            entryFileNames: "bundle.mjs",
            inlineDynamicImports: true,
            sourcemap: true,
          },
        },

        target: "es2018",
        minify: "terser",
        sourcemap: true,
        lib: false,
      },

      resolve: {
        extensions: [".js", ".ts", ".mjs"],
        conditions: ["browser", "module", "import"],
      },

      esbuild: false,
    });

    console.log("✅ Bundle created at", path.join(projectDir, "bundle.mjs"));
  } catch (err) {
    console.error("❌ Bundle failed:", err);
  }
}
