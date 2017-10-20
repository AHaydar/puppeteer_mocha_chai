const puppeteer = require('puppeteer');
const { environment } = require('./puppeteer.conf');

const env = environment[process.env.MY_ENV || 'local'];
console.log(env);
module.exports = {
  openBrowser() {
    puppeteer.launch({ headless: env.headless });
  },
};

