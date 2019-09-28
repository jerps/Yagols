/*

Yagols v4.0

(c) 2018-2019 John Erps

This software is licensed under the MIT license (see LICENSE)

*/

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {

  env = env ? env : {};

  let conf = {
    mode: env.prod ? 'production' : 'development',
    entry: {
      yagols: path.resolve(__dirname, 'src/Yagols.js')
    },
    output: {
      filename: 'Yagols.min.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      modules: ['node_modules']
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'Yagols.html',
        template: 'src/Yagols.html',
        inlineSource: '.js$'
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new CleanWebpackPlugin(),
      new webpack.BannerPlugin(fs.readFileSync(path.resolve(__dirname, 'LICENSE'), 'utf8'))
    ]
  };

  if (env.prod) {conf=merge(conf, {
    devtool: 'source-map',
    module: {
      rules : [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
  });} else {conf=merge(conf, {
    devtool: 'cheap-module-eval-source-map'
  });}
  return conf;
};
