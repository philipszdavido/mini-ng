import * as path from "path";
import * as glob from "glob";
import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export async function build(projectDir: string) {
  console.log("Bundling project in:", projectDir);

  // Find all JS files in the dist folder
  const distDir = path.join(projectDir, "dist");
  const inputFiles = glob.sync(`${distDir}/**/*.js`);

  try {
    const bundle = await rollup({
      input: "dist/main.js",
      // external: ["@mini-ng/core"],
      plugins: [
        resolve({
          browser: true, // resolve browser-compatible modules
          preferBuiltins: false, // don't prefer Node builtins
          extensions: [".js", ".mjs", ".ts"],
          exportConditions: ["import", "browser", "module"], 
        }),
        commonjs(),
        terser(),
      ],
    });

    await bundle.write({
      file: path.join(projectDir, "bundle.mjs"),
      format: "es", 
      inlineDynamicImports: true,
      sourcemap: true,
    });

    // const { output } = await bundle.generate({ format: "es" });
    // for (const chunk of output) {
    //   console.log(chunk.fileName, chunk.type);
    // }

    console.log("✅ Bundle created at", path.join(projectDir, "bundle.mjs"));
  } catch (err) {
    console.error(err);
  }
}
