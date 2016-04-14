'use strict';

var express = require('express');
var app = express();
var fs = require('fs');

var appCacheFile = 'manifest.appcache';
fs.readFile(appCacheFile, 'utf8', function (error, data) {
  var fail = function (error) {
    console.log('Error when trying to update %s', appCacheFile);
    console.log(error);
    process.exit(1);
  };

  if (error) {
    fail(error);
  }

  var newContent = data.replace(/# Started at .*/, '# Started at ' + Date.now());
  fs.writeFile(appCacheFile, newContent, 'utf8', function (error) {
    if (error) {
      fail(error);
    }
  });
});

app.use(function (request, response, next) {
  console.log('Requested: %s', request.url);
  next();
});

app.use('/', express.static(__dirname));

express.static.mime.define({
  'application/manifest+json': ['webmanifest'],
  'text/cache-manifest': ['appcache'],
  'image/x-icon': ['ico']
});

var port = process.env.port || 8000;
app.listen(port, function () {
  console.log('Server listening on port %d...', port);
});
