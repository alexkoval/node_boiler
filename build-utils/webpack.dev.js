/* eslint import/no-nodejs-modules: "off" */
/* eslint no-sync: "off" */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const commonPaths = require('./common-paths');

const devPort = 3001;
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
    cert: fs.readFileSync(path.join(commonPaths.certsPath, 'cert.pem')),
    key: fs.readFileSync(path.join(commonPaths.certsPath, 'key.pem')),
    host: 'localhost',
    port: devPort,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};

module.exports = config;