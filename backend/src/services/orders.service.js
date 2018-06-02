import { InvalidEntityError } from '../errors';
import { NOT_FOUND_CODE } from '../constants/http';

const makeOrdersService = (repo, notificationService) => ({
  getAll: () => repo.getAll(),
  create: async (data) => {
    try {
      const order = await repo.create(data);
      notificationService.sendViaConsole('Order createad\n', order, '\n(NOTIFY SELLERS)');
      return order;
    } catch (e) {
      if (e instanceof repo.NotFoundError) {
        throw new InvalidEntityError({ message: 'Order not found' }, NOT_FOUND_CODE);
      }
      throw e;
    }
  },
});

export default makeOrdersService;
