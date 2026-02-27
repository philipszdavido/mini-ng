// core/rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  {
    // ESM
    input: "/index.ts",
    output: { file: "/dist/core.mjs", format: "es", sourcemap: true },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    // UMD
    input: "/index.ts",
    output: {
      file: "/dist/core.umd.js",
      format: "umd",
      name: "miniNgCore",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
];
