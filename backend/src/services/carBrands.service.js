const makeCarBrandsService = repo => ({
  getAll: () => repo.getAll(),
});

export default makeCarBrandsService;
