import { OK_CODE } from '../../http';

const makeListCarModelsController = carModelsService => ({
  get: async (req) => {
    const carModels = await carModelsService.getAllForBrand(req.params.brandId);
    return { body: carModels, statusCode: OK_CODE };
  },
});

export default makeListCarModelsController;
