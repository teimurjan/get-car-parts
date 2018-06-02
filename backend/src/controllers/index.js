import orderCreateValidator from '../validators/order-create.validator';
import makeListCarBrandsController from './carBrands/list.controller';
import makeListCarModelsController from './carModels/list.controller';
import makeListOrdersController from './orders/list.controller';

const makeControllers = services => ({
  carBrands: {
    list: makeListCarBrandsController(services.carBrands),
  },
  carModels: {
    list: makeListCarModelsController(services.carModels),
  },
  orders: {
    list: makeListOrdersController(orderCreateValidator, services.orders),
  },
});

export default makeControllers;
