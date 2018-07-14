const path = require('path'); // eslint-disable-line import/no-nodejs-modules

const root = path.resolve(__dirname, '../');

module.exports = {
  projectRoot: root,
  certsPath: path.join('dev_certs'),
  outputPath: path.join(root, 'dist'),
  appEntry: path.join(root, 'src')
};