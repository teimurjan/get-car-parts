import { OK_CODE } from '../../constants/http';

const makeListCarBrandsController = service => ({
  get: async () => {
    const carBrands = await service.getAll();
    return { body: { data: carBrands }, statusCode: OK_CODE };
  },
});

export default makeListCarBrandsController;
