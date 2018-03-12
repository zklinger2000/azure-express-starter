"use strict";
/* eslint-disable no-console */
import express from 'express';
import routes from './routes/routes';

// Express App setup
const app = express();

// Pass in our app to make it available to all routes
routes(app);

// Global error logging if any errors make it past our route controllers
// app.use((err, req, res, next) => {
//   res.status(422).send({ error: err.message });
// });

export default app;
