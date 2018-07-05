/* eslint no-sync: "off" */
/* eslint no-console: "off" */
/* eslint no-process-exit: "off" */
/* eslint import/no-nodejs-modules: "off" */

const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');
const morgan = require('morgan');
const config = require('../../config/index');

const logDirectory = path.join(__dirname, '..', '..', 'log');
const logger = {};

if(!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = config.env.name === 'development' ? process.stdout : rfs('access.log', {
  interval: '1d',
  path: logDirectory
});

const errorLogStream = config.env.name === 'development' ? process.stderr : rfs('error.log', {
  interval: '1d',
  path: logDirectory
});


logger.errorStream = morgan('combined', {
  skip(req, res) {
    return parseInt(res.statusCode, 10) < 400;
  },
  stream: errorLogStream
});

logger.accessStream = morgan('combined', {
  skip(req, res) {
    return parseInt(res.statusCode, 10) >= 400;
  },
  stream: accessLogStream
});


module.exports = logger;