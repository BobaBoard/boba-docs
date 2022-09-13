module.exports = function () {
  return {
    name: "custom-webpack-plugin",
    configureWebpack(config) {
      console.log(config);
      return {
        module: {
          rules: [
            {
              test: require.resolve("react"),
              loader: "expose-loader",
              options: {
                exposes: "React",
              },
            },
            {
              test: require.resolve("react-dom"),
              loader: "expose-loader",
              options: {
                exposes: "ReactDOM",
              },
            },
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
