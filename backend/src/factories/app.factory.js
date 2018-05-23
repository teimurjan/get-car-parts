import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const makeApp = () => {
  const app = express();
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  return app;
};

export default makeApp;
