import makeCarBrandsService from '../services/carBrands.service';
import makeListCarBrandsController from '../controllers/carBrands/list.controller';
import makeCarModelsService from '../services/carModels.service';
import makeListCarModelsController from '../controllers/carModels/list.controller';
import makeOrdersService from '../services/orders.service';
import makeListOrdersController from '../controllers/orders/list.controller';
import orderCreateValidator from '../validators/order-create.validator';
import { OK_CODE, SERVER_ERROR_CODE } from '../http';
import { InvalidEntityError } from '../errors';

const wrapController = controller => async (req, res) => {
  try {
    const { body = {}, statusCode = OK_CODE } = await controller(req);
    return res.status(statusCode).json(body);
  } catch (e) {
    if (e instanceof InvalidEntityError) {
      return res.status(e.statusCode).json(e.errors);
    }
    return res.status(SERVER_ERROR_CODE).json(e);
  }
};

export const makeListCarBrandRoute = (app, repos) => {
  const service = makeCarBrandsService(repos.carBrands);
  const controller = makeListCarBrandsController(service);
  app.get('/carBrands', wrapController(controller.get));
};

export const makeListCarModelRoute = (app, repos) => {
  const service = makeCarModelsService(repos.carModels);
  const controller = makeListCarModelsController(service);
  app.get('/carBrands/:brandId/models', wrapController(controller.get));
};

export const makeListOrderRoute = async (app, repos) => {
  const service = makeOrdersService(repos.orders);
  const controller = await makeListOrdersController(orderCreateValidator, service);
  app.post('/orders', wrapController(controller.post));
};
