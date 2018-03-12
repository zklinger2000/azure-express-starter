"use strict";
/* eslint-disable no-console */
/* eslint-disable import/default */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This initializes the Express application

var port = process.env.PORT || 8050;
var server = _app2.default.listen(port, function (err) {
  if (err) {
    console.log(_chalk2.default.red(err));
  } else {
    console.log(_chalk2.default.green('Server listening on port'), _chalk2.default.blue(port));
  }
});

exports.default = server;