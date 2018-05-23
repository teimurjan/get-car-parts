import { makeListCarBrandRoute, makeListCarModelRoute, makeListOrderRoute } from './factories/routes.factory';

const makeRoutes = (app, repos) => {
  makeListCarBrandRoute(app, repos);
  makeListCarModelRoute(app, repos);
  makeListOrderRoute(app, repos);
};

export default makeRoutes;
