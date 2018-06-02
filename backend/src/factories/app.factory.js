import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import firebaseAdmin from 'firebase-admin';
import firebaseKey from '../../get-car-parts-firebase-adminsdk.json';

const makeApp = () => {
  const app = express();
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const firebaseCredential = firebaseAdmin.credential.cert(firebaseKey);
  firebaseAdmin.initializeApp({
    credential: firebaseCredential,
  });

  return {
    instance: app,
    firebase: firebaseAdmin,
  };
};

export default makeApp;
