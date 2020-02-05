const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "production",
  entry: ["babel-polyfill", "./src/components/index.js"],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "QUIZ-APP",
      template: "./views/index.ejs"
    }),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin([{ from: "./src/components/sass/img", to: "img" }])
  ],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/,

        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/i,
        loader: "file-loader"
      }
    ]
  }
};

module.exports = config;
