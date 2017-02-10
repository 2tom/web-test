var webpack = require('webpack');
module.exports = {
  entry: "./src/Index.tsx",
  output: {
    filename: "./dist/bundle.js",
    publicPath: "./dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: "ts-loader"}
        ]
      }
    ],
  },
  devServer: {
    contentBase: "./dist",
    inline: true,
    hot:true
  }
};
