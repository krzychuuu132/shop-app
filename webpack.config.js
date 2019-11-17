const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin()
  ],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/,

        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      { test: /\.(png|jpe?g|gif)$/i, loader: "url-loader?mimetype=image/jpg" }
    ]
  }
};

module.exports = config;
