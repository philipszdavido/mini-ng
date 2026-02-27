// core/rollup.config.mjs
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const input = "index.ts";

export default [
  {
    // ESM
    input,
    output: { file: "dist/core.mjs", format: "es", sourcemap: true },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    // CommonJS
    input,
    output: { file: "dist/core.cjs.js", format: "cjs", sourcemap: true },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    // UMD (for direct browser usage / CDN)
    input,
    output: {
      file: "dist/core.umd.js",
      format: "umd",
      name: "miniNgCore",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
];
