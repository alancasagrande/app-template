var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src'),
  config = require('./webpack.config'),
  _ = require('lodash');


delete config.debug;
delete config.devtool;

module.exports = _.extend(config, {
  entry: {
    app: path.join(srcPath, 'init.jsx'),
    vendor: [
      'react',
      'superagent',
      'lodash'
    ]
  },

  resolve: _.merge(config.resolve, {
    alias: {
      appConfig: path.join(__dirname, 'config', 'production')
    }
  }),

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      // favicon: 'src/favicon.ico',
      template: 'src/index.html',
      chunks: ['app', 'vendor']
    })
  ]
});
