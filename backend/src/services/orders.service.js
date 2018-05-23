import { InvalidEntityError } from '../errors';
import { NOT_FOUND_CODE } from '../http';

const makeOrdersService = ordersRepo => ({
  create: (data) => {
    try {
      return ordersRepo.create(data);
    } catch (e) {
      if (e instanceof ordersRepo.NotFoundError) {
        throw new InvalidEntityError({ message: 'Order not found' }, NOT_FOUND_CODE);
      }
      throw e;
    }
  },
});

export default makeOrdersService;
