import { NotFoundError } from '../errors';

const makeRepo = model => ({
  async findById(id) {
    const entity = await model.findById(id);
    if (!entity) {
      throw new this.NotFoundError();
    } else {
      return entity;
    }
  },
  getAll: () => model.findAll(),
  filterBy: query => model.findAll({ where: query }),
  create: title => model.create({ title }),
  delete: async (id) => {
    const obj = await model.findById(id);
    return obj.destroy();
  },
  NotFoundError,
});

export default makeRepo;
