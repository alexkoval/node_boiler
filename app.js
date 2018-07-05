/* eslint import/no-nodejs-modules: "off" */
/* eslint no-sync: "off" */

const path = require('path');
const express = require('express');
const helmet = require('helmet');
const expressStaticGzip = require('express-static-gzip');
const logger = require('./utils/loggers/app');
const appErrorHandlers = require('./utils/app_error_handlers');
const config = require('./config/index');

const app = express();

app.use(helmet());

app.use(logger.accessStream);
app.use(logger.errorStream);


app.use('/styles/', expressStaticGzip(path.join(__dirname, 'dist', 'styles'), {
  enableBrotli: true,
  maxAge: config.assets.styles.maxAge
}));

app.use('/static/', expressStaticGzip(path.join(__dirname, 'dist', 'static'), {
  enableBrotli: true,
  maxAge: config.assets.static.maxAge
}));

app.use('/', expressStaticGzip(path.join(__dirname, 'dist'), {
  enableBrotli: true,
  maxAge: config.pages.index.maxAge
}));

app.use('*', expressStaticGzip(path.join(__dirname, 'dist'), {
  enableBrotli: true
}));

appErrorHandlers(app);

module.exports = app;