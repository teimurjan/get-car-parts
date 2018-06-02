import makeCarBrandsService from './carBrands.service';
import makeCarModelsService from './carModels.service';
import makeOrdersService from './orders.service';
import makeNotificationService from './notification.service';

const makeServices = (repos, { firebase }) => {
  const notificationService = makeNotificationService({ fcm: firebase.messaging() });
  return {
    carBrands: makeCarBrandsService(repos.carBrands),
    carModels: makeCarModelsService(repos.carModels),
    orders: makeOrdersService(repos.orders, notificationService),
  };
};

export default makeServices;
