const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  mode: "development",
  entry: ["babel-polyfill", "./src/components/index.js"],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  //devServer: {
  // port: 3001,
  // contentBase: "./public/bundle.js",
  // inline: true
  //},
  plugins: [
    new CleanWebpackPlugin(),
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
        loader: "file-loader",
        options: {
          name: "[name][contenthash].[ext]",
          outputPath: "/images"
        }
      }
    ]
  }
};

module.exports = config;
