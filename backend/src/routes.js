import makeRoute from './factories/routes.factory';
import { API_PREFIX } from './constants/http';

const makeRoutes = controllers => [
  makeRoute('get', `${API_PREFIX}/carBrands`, controllers.carBrands.list.get),
  makeRoute('get', `${API_PREFIX}/carBrands/:brandId/models`, controllers.carModels.list.get),
  makeRoute('get', `${API_PREFIX}/orders`, controllers.orders.list.get),
  makeRoute('post', `${API_PREFIX}/orders`, controllers.orders.list.post),
];

export default makeRoutes;
