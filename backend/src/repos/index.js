import makeCarBrandsRepo from './carBrands.repo';
import makeCarModelsRepo from './carModels.repo';
import makeOrdersRepo from './orders.repo';

export default db => ({
  carBrands: makeCarBrandsRepo(db),
  carModels: makeCarModelsRepo(db),
  orders: makeOrdersRepo(db),
});
