let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
let port = 6688;
module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    port,
  },
  entry: './index.js',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new OpenBrowserWebpackPlugin({ url: 'http://localhost:' + port })
  ],
  module: {
   rules: [
     {
       test: /\.jsx?$/,
       use: 'babel-loader',
       exclude: /node_modules/,
     },
   ],
  },
};
/*
 * console.log('What needs to change in this module?');
 * console.log('What would be incoming?');
 * console.log('What would be affected?');
 * console.log('What would be return?');
 */