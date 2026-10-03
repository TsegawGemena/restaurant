const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devServer: {
    static: "./dist",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};