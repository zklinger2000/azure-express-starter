"use strict";
import config from '../../config';
import usersController from '../controllers/users';

const routes = (app) => {
  //================
  // Sample Routes
  //================

  // This is a GET route that is open to the world
  app.get('/api/noauth', function(req, res) {
    res.send({ message: 'no authorization required' });
  });

  app.get('/', function(req, res) {
    res.send(`<!DOCTYPE html><html><head></head><body><h1>${config.nodeEnv}</h1><a href="https://azure-express-dev.azurewebsites.net/api/noauth">Route example</a></body></html>`);
  });

  //=======
  // User
  //=======

  app.post('/api/users/create', usersController.create);

};

export default routes;
