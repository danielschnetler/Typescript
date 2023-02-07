import * as path from "path";
import * as Webpack from "webpack";
import "webpack-dev-server";
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const config: Webpack.Configuration = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new BrowserSyncPlugin({ host: "localhost", port: 3000 }, { reload: true }),
  ],
};

export default config;
