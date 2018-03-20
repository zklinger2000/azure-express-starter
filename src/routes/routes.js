"use strict";
import config from '../../config';
import usersController from '../controllers/users';

const routes = (app) => {
  //================
  // Sample Routes
  //================

  // Home page
  app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html><html><head></head><body><h1>${config.nodeEnv}</h1><a href="${config.webAppUrl}/api/noauth">Route example</</body></html>`);
  });
  // Returns JSON
  app.get('/api/noauth', (req, res) => {
    res.json({ message: 'no authorization required' });
  });

  //=======
  // User
  //=======

  // Create
  app.post('/api/users/create', usersController.create);

  // Read all
  app.get('/api/users', usersController.read);

  // Login
  app.post('/api/users/login', usersController.login);

};

export default routes;
