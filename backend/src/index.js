import makeApp from './factories/app.factory';
import makeRoutes from './routes';
import makeDb from './db';
import makeRepos from './repos';
import dbConfig from '../config/config';

const startApp = async () => {
  const app = makeApp();
  const db = makeDb(dbConfig[process.env.NODE_ENV]);
  const repos = makeRepos(db);
  makeRoutes(app, repos);

  app.listen(process.env.PORT, () => console.log(`Listening at localhost:${process.env.PORT}`));

  return app;
};

export default startApp;
