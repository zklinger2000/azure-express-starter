"use strict";
/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes/routes';
import connectDB from './database/connectDB';
// import config from '../config';

// TODO: add tests

// MongoDB Setup
// connectDB();

// Express App setup
const app = express();

// Middleware for logging
app.use(morgan('combined'));

// Middleware parses incoming requests into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

// Pass in our app to make it available to all routes
routes(app);

// Global error logging if any errors make it past our route controllers
// app.use((err, req, res, next) => {
//   res.status(422).send({ error: err.message });
// });

export default app;
