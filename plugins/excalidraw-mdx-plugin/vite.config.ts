const path = require("path");
const { defineConfig } = require("vite");
const dts = require("vite-plugin-dts");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format: string) => `excalidraw-mdx-plugin.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    plugins: [dts()],
  },
});
