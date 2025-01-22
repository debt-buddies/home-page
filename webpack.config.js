const HtmlWebpackPlugin = require("html-webpack-plugin");
// import ModuleFederationPlugin from webpack
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = (env, argv) => {
  console.log({ env, argv });

  return {
    entry: "./src/entry.js",
    mode: "development",
    devServer: {
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      //...
      new ModuleFederationPlugin({
        name: "HomeApp",
        filename: "remoteEntry.js",
        exposes: {
          "./Header": "./src/Header.jsx",
          "./hooks/useStore": "./src/hooks/useStore.js",
          "./hooks/useStoreSelector": "./src/hooks/useStoreSelector.js",
          "./providers/StoreProvider": "./src/providers/StoreProvider.jsx",
        },
        remotes: {
          MainApp: "PdpApp@http://localhost:3001/remoteEntry.js",
          AsideApp: "AsideApp@http://localhost:3002/remoteEntry.js",
          OnepackApp: "OnepackApp@http://localhost:3003/remoteEntry.js",
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    target: "web",
  };
};
