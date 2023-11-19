import { CustomError } from '../models/index.js';

const ErrorController = {
  throwError(error) {
    throw new CustomError(error);
  },
};

export default ErrorController;
