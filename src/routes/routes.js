"use strict";

const routes = (app) => {
  //================
  // Sample Routes
  //================

  // This is a GET route that is open to the world
  app.get('/api/noauth', function(req, res) {
    res.send({ message: 'no authorization required' });
  });

  app.get('/', function(req, res) {
    res.send('<!DOCTYPE html><html><head></head><body><h1>{} Deployment</h1><a href="https://unity-nodejs.azurewebsites.net/api/noauth">Route example</a></body></html>');
  });

};

export default routes;
