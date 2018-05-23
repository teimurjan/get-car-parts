import { UNPROCESSABLE_ENTITY_CODE, OK_CODE } from '../../http';
import { InvalidEntityError } from '../../errors';

const makeListOrdersController = (validator, ordersService) => ({
  post: async (req) => {
    try {
      await validator.validate(req.body);
    } catch ({ errors }) {
      throw new InvalidEntityError(errors, UNPROCESSABLE_ENTITY_CODE);
    }
    const order = await ordersService.create(req.body);
    return { body: order, statusCode: OK_CODE };
  },
});

export default makeListOrdersController;
