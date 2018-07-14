const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 1400,
      minRatio: 0.8
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 1400,
      minRatio: 0.8
    })
  ]
};

module.exports = config;