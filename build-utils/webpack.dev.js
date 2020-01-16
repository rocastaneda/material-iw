const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './sandbox/index.jsx',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'bundle.js',
    // libraryTarget: 'umd',
    // library: 'lib',
    // umdNamedDefine: true,
    // globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.css|.pcss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../', '.env.development'),
    }),
    new HtmlWebpackPlugin({
      template: './sandbox/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    port: 8080,
  },
};
