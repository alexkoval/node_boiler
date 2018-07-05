const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: 'server'
    })
  ]
};