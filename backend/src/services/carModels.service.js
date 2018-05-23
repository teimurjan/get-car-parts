const makeCarModelsService = repo => ({
  getAllForBrand: brandId => repo.filterBy({ carBrandId: brandId }),
});

export default makeCarModelsService;
