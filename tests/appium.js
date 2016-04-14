'use strict';

var host = 'appium.testdroid.com';
//var host = '127.0.0.1';
var port = 80;
//var port = 4723;
var platform = process.argv[3];
var app = process.argv[4];
var key = process.env.TESTDROID_KEY;

//var iosDevice = 'Apple iPad Mini A1432 9.2.1';
var iosDevice = 'Apple iPhone 5 A1429 9.2.1';
var androidDevice = 'Samsung Galaxy Tab 3 10.1 GT-P5210 4.4.2';
//var androidDevice = 'Samsung Galaxy Nexus SPH-L700 4.3';
//var androidDevice = 'Samsung Galaxy Tab 3 10.1 GT-P5210 4.4.2';

var deviceName = platform === 'ios' ? iosDevice : androidDevice;

var capabilities = {
  host: host,
  port: port,
  testdroid_target: platform,
  testdroid_project: 'manifoldjs-presentation-' + platform,
  testdroid_testrun: 'Test Run ' + Date.now(),
  testdroid_app: app,
  testdroid_apiKey: key,
  testdroid_device: deviceName,
  bundleId: 'net.azurewebsites.manifoldjspresentationstaging',
  platformName: platform === 'ios' ? 'iOS' : 'Android',
  deviceName: deviceName
};

module.exports = capabilities;
