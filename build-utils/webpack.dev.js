const fs = require('fs'); // eslint-disable-line import/no-nodejs-modules
const path = require('path'); // eslint-disable-line import/no-nodejs-modules
const webpack = require('webpack');
const commonPaths = require('./common-paths');

const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    https: true,
    cert: fs.readFileSync(path.join(commonPaths.certsPath, 'cert.pem')), // eslint-disable-line no-sync
    key: fs.readFileSync(path.join(commonPaths.certsPath, 'key.pem')), // eslint-disable-line no-sync
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};

module.exports = config;