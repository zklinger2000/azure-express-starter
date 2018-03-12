"use strict";

const routes = (app) => {
  //================
  // Sample Routes
  //================

  // This is a GET route that is open to the world
  app.get('/api/noauth', function(req, res) {
    res.send({ message: 'no authorization required' });
  });
};

export default routes;
