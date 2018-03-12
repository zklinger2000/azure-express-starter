"use strict";
/* eslint-disable no-console */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Express App setup
var app = (0, _express2.default)();

// Pass in our app to make it available to all routes
(0, _routes2.default)(app);

// Global error logging if any errors make it past our route controllers
// app.use((err, req, res, next) => {
//   res.status(422).send({ error: err.message });
// });

exports.default = app;