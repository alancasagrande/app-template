var HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');


module.exports = {
  debug: true,

  devtool: 'source-map',

  entry: {
    app: path.join(srcPath, 'init.jsx')
  },

  output: {
    filename: '[name].js'
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src'],
    alias: {
      appConfig: path.join(__dirname, 'config', 'development')
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpg|ico)$/, loader: 'url?limit=8192' },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      // favicon: 'src/favicon.ico',
      template: 'src/index.html',
      chunks: ['app']
    })
  ]
};
