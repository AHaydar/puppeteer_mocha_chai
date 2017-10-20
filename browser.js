const puppeteer = require('puppeteer');

module.exports = {
  openBrowser() {
    puppeteer.launch({ headless: false });
  },
};

