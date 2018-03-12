"use strict";
/* eslint-disable no-console */
/* eslint-disable import/default */
import chalk from 'chalk';
import app from '../app'; // This initializes the Express application

const port = process.env.PORT || 8050;
const server = app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Server listening on port'), chalk.blue(port));
  }
});

export default server;
