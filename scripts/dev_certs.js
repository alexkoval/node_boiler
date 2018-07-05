/* eslint no-sync: "off" */
/* eslint no-console: "off" */
/* eslint no-process-exit: "off" */
/* eslint import/no-nodejs-modules: "off" */

const chalk = require('chalk');
const devCertWithLocalhost = require('devcert-with-localhost');
const fs = require('fs');
const path = require('path');

const certsDirectory = path.join(__dirname, '..', 'dev_certs');
const certKeyPath = path.join(certsDirectory, 'key.pem');
const certPath = path.join(certsDirectory, 'cert.pem');

if(!fs.existsSync(certsDirectory)) {
  fs.mkdirSync(certsDirectory);
}

if (fs.existsSync(certPath)) {
  process.stdout.write(chalk.yellow('📄  Existing certificate found') + chalk.dim(' – Replacing\n'));
  fs.unlinkSync(certPath);
}
if (fs.existsSync(certKeyPath)) {
  process.stdout.write(chalk.yellow('🔑  Existing private key found') + chalk.dim(' – Replacing\n'));
  fs.unlinkSync(certKeyPath);
}

process.stdout.write(chalk.yellow('🔐  Generating certificates \n'));

devCertWithLocalhost.default('webpackboiler', { installCertutil: true }).then(({ key, cert }) => {
  fs.writeFileSync(certPath, cert);
  fs.writeFileSync(certKeyPath, key);

  fs.chmodSync(certPath, '0400');
  fs.chmodSync(certKeyPath, '0400');
  process.stdout.write(chalk.dim(' – ') + chalk.green.bold('✅  Success!\n'));
  process.exit(0);
}).catch((err) => {
  process.stderr.write(chalk.red(`Failure. ${err}\n`));
  process.exit(1);
});