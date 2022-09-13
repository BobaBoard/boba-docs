import type { PluginModule } from "@docusaurus/types";

const plugin: PluginModule = () => {
  return {
    name: "excalidraw-mdx-plugin",
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.excalidraw$/,
              use: [
                {
                  loader: "raw-loader",
                },
              ],
            },
          ],
        },
      };
    },
  };
};

export default plugin;
