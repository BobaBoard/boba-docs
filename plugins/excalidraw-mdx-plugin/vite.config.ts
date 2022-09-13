import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "dist/"),
    rollupOptions: {
      input: {
        plugin: path.resolve(__dirname, "src/plugin.ts"),
        transformer: path.resolve(__dirname, "src/index.ts"),
        component: path.resolve(__dirname, "src/ExcalidrawComponent.tsx"),
      },
      external: ["react", "react-dom", "fs"],
      output: [
        {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          format: "es",
          entryFileNames: (chunk) =>
            `excalidraw-mdx-plugin.${chunk.name}.es.js`,
        },
        {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          format: "cjs",
          entryFileNames: (chunk) =>
            `excalidraw-mdx-plugin.${chunk.name}.cjs.js`,
        },
      ],
      preserveEntrySignatures: "exports-only",
    },
  },
  plugins: [dts()],
});
