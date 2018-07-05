/* eslint max-params: ["error", 4] */
/* eslint import/no-nodejs-modules: "off" */

const path = require('path');
const config = require('../config/index');

const sendNotFound = (err, req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'), config.pages.notFound);
};

const sendServerError = (err, req, res) => {
  res.status(503).sendFile(path.join(__dirname, '..', 'public', '503.html'), config.pages.serverError);
};

const processError = (err, req, res) => {
  switch (err.statusCode) {
  case 404:
    sendNotFound(err, req, res);
    break;
  case 503:
    sendServerError(err, req, res);
    break;
  default:
    sendServerError(err, req, res);
  }
};

const errorHandlers = (app) => {
  app.use((err, req, res, next) => {
    processError(err, req, res, next);
  });
};


module.exports = errorHandlers;