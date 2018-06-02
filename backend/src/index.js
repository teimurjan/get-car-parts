import makeApp from './factories/app.factory';
import makeRoutes from './routes';
import makeServices from './services';
import makeControllers from './controllers';
import makeDb from './db';
import makeRepos from './repos';
import dbConfig from '../config/config';

const startApp = () => {
  const app = makeApp();

  const db = makeDb(dbConfig[process.env.NODE_ENV]);
  const repos = makeRepos(db);
  const services = makeServices(repos, { firebase: app.firebase });
  const controllers = makeControllers(services);
  const routes = makeRoutes(controllers);

  routes.forEach(({ method, path, controller }) => app.instance[method](path, controller));

  app.instance.listen(process.env.PORT, () => console.log(`Listening at localhost:${process.env.PORT}`));

  return app;
};

export default startApp;
