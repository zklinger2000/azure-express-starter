"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var routes = function routes(app) {
  //================
  // Sample Routes
  //================

  // This is a GET route that is open to the world
  app.get('/api/noauth', function (req, res) {
    res.send({ message: 'no authorization required' });
  });
};

exports.default = routes;