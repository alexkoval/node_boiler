const fs = require('fs'); // eslint-disable-line import/no-nodejs-modules
const path = require('path'); // eslint-disable-line import/no-nodejs-modules
const rfs = require('rotating-file-stream');
const morgan = require('morgan');
const config = require('../../config/.');

const logDirectory = path.join(__dirname, '..', '..', 'log');
const logger = {};

if(!fs.existsSync(logDirectory)) { // eslint-disable-line no-sync
  fs.mkdirSync(logDirectory); // eslint-disable-line no-sync
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