var test = require('tape');
var browser = require('./browser.js');

var end = function (t) {
  browser.quit()
  .then(function () {
    t.end();
  });
};

test('title test', function (t) {
  t.plan(1);
  browser.initialize()
  .then(function () {
    return browser.title();
  })
  .then(function (title) {
    t.equal(title, 'Using ManifoldJS to Get More Out of Web Sites');
    return browser.takeScreenshot();
  })
  .then(function (screenshotPath) {
    console.log('Screenshot saved to %s', screenshotPath);
    end(t);
  })
  .catch(function (error) {
    t.fail(error);
    end(t);
  });
});
