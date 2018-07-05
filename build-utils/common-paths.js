/* eslint import/no-nodejs-modules: "off" */

const path = require('path');

const root = path.resolve(__dirname, '../');

module.exports = {
  projectRoot: root,
  certsPath: path.join('dev_certs'),
  outputPath: path.join(root, 'dist'),
  appEntry: path.join(root, 'src')
};