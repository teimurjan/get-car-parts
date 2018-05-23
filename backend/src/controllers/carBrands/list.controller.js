import { OK_CODE } from '../../http';

const makeListCarBrandsController = carBrandsService => ({
  get: async () => {
    const carBrands = await carBrandsService.getAll();
    return { body: carBrands, statusCode: OK_CODE };
  },
});

export default makeListCarBrandsController;
