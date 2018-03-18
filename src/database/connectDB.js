"use strict";
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import config from '../../config';

const connectDB = () => {
  console.log(`NODE_ENV=${config.nodeEnv}`);
};

export default connectDB;
