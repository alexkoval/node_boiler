/* eslint no-process-env: "off" */

const stgConfig = require('./staging');
const prodConfig = require('./production');
const devConfig = require('./development');

let config = {};

switch (process.env.ENV) {
case 'production':
  config = prodConfig;
  break;
case 'staging':
  config = stgConfig;
  break;
default:
  config = devConfig;
}

module.exports = config;