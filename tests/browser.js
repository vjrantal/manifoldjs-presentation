'use strict';

var wd = require('wd');

var useSelenium = process.argv[2] === 'selenium';

var capabilities = useSelenium ? require('./selenium.js') : require('./appium.js');

var url = 'http://127.0.0.1:8000';

var webContext = null;
var nativeContext = null;

var browser = wd.promiseRemote(capabilities);

browser.initialize = function () {
  var retries = 10;
  var retryDelay = 1000;
  var init = function () {
    return browser.init(capabilities)
    .catch(function (error) {
      retries--;
      if (retries <= 0) {
        throw new Error(error);
      } else {
        return new Promise(function (resolve) {
          setTimeout(function () {
            return resolve();
          }, retryDelay);
        })
        .then(function () {
          return init();
        });
      }
    });
  };
  if (useSelenium) {
    return init()
    .then(function () {
      return browser.get(url);
    });
  } else {
    return init()
    .then(function () {
      return browser.contexts();
    })
    .then(function (contexts) {
      contexts.forEach(function (context) {
        if (context.startsWith('WEBVIEW')) {
          webContext = webContext || context;
        } else if (context.startsWith('NATIVE')) {
          nativeContext = nativeContext || context;
        }
      });
      return browser.context(webContext);
    });
  }
};

browser.takeScreenshot = function () {
  if (useSelenium) {
    return browser.saveScreenshot();
  } else {
    return browser.context(nativeContext)
    .then(function () {
      return browser.saveScreenshot();
    })
    .then(function (screenshotPath) {
      return browser.context(webContext)
      .then(function () {
        return Promise.resolve(screenshotPath);
      });
    });
  }
};

module.exports = browser;
