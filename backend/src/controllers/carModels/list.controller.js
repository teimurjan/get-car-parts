import { OK_CODE } from '../../constants/http';

const makeListCarModelsController = service => ({
  get: async (req) => {
    const carModels = await service.getAllForBrand(req.params.brandId);
    return { body: { data: carModels }, statusCode: OK_CODE };
  },
});

export default makeListCarModelsController;
