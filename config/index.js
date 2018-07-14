const stgConfig = require('./staging');
const prodConfig = require('./production');
const devConfig = require('./development');

let config = {};

switch (process.env.ENV) { // eslint-disable-line no-process-env
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