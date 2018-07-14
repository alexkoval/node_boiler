/* eslint import/no-dynamic-require: "off" */

const webpackMerge = require('webpack-merge');
const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

// We can include Webpack plugins, through addons, that do
// not need to run every time we are developing.
// We will see an example when we set up 'Bundle Analyzer'
const addOns = (/* string | string[] */ addOnsArg) => {
  // Normalize array of addons (flatten)
  const add = Array.from([addOnsArg]).filter(Boolean); // If add-ons is undefined, filter it out

  /* eslint global-require: "off" */
  return add.map(addName => require(`./build-utils/addons/webpack.${addName}.js`));
};

// 'env' will contain the environment variable from 'scripts'
// section in 'package.json'.
// console.log(env); => { env: 'dev' }
module.exports = (env) => {
  // We use 'buildValidations' to check for the 'env' flag
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  // Select which Webpack configuration to use; development
  // or production
  // console.log(env.env); => dev
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  // 'webpack-merge' will combine our shared configurations, the
  // environment specific configurations and any addons we are
  // including
  // Then return the final configuration for Webpack
  return webpackMerge(
    commonConfig,
    envConfig,
    ...addOns(env.addons)
  );
};