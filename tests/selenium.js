'use strict';

var capabilities = {
  host: '127.0.0.1',
  port: 4444,
  browserName: process.env.DESKTOP_BROWSER || 'firefox'
};

module.exports = capabilities;
