import { UNPROCESSABLE_ENTITY_CODE, OK_CODE } from '../../constants/http';
import { InvalidEntityError } from '../../errors';

const makeListOrdersController = (validator, service) => ({
  get: async () => {
    const orders = await service.getAll();
    return { body: { data: orders }, statusCode: OK_CODE };
  },
  post: async (req) => {
    try {
      await validator.validate(req.body);
    } catch ({ errors }) {
      throw new InvalidEntityError(errors, UNPROCESSABLE_ENTITY_CODE);
    }
    const order = await service.create(req.body);
    return { body: { data: order }, statusCode: OK_CODE };
  },
});

export default makeListOrdersController;
