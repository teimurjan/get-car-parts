import { OK_CODE, SERVER_ERROR_CODE } from '../constants/http';
import { InvalidEntityError } from '../errors';

const makeRoute = (method, path, controller) => ({
  method,
  path,
  controller: async (req, res) => {
    try {
      const { body = {}, statusCode = OK_CODE } = await controller(req);
      return res.status(statusCode).json(body);
    } catch (e) {
      if (e instanceof InvalidEntityError) {
        return res.status(e.statusCode).json(e.errors);
      }
      return res.status(SERVER_ERROR_CODE).json(e);
    }
  },
});

export default makeRoute;
