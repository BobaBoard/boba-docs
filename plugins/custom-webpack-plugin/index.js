module.exports = function () {
  return {
    name: "cusotm-webpack-plugin",
    configureWebpack(config) {
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
          ],
        },
      };
    },
  };
};
