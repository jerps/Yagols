const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {

  env = env ? env : {};

  conf = {
    mode: env.prod ? 'production' : 'development',
    context: path.resolve(__dirname),
    entry: {
      yagols: path.resolve(__dirname, 'src/Yagols.js')
    },
    output: {
      path: path.resolve(__dirname)
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
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [],
        cleanAfterEveryBuildPatterns: ['Yagols.js']
      })
    ],
    optimization: {
    }
  };

  if (env.prod) {
    merge(conf, {
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
    });
  } else {
    merge(conf, {
      devtool: 'cheap-module-eval-source-map'
    });
  }
  return conf;
};
