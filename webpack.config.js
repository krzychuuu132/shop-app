const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: "development",
  entry: ["babel-polyfill", "./src/components/index.js"],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

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
      { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" }
    ]
  }
};

module.exports = config;
