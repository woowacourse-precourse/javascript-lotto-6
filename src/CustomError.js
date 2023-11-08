import { ERROR } from './Constant.js';

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
  }
}

export default CustomError;
