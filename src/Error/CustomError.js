import { ERROR } from '../Constants/constants';

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX}} ${message}`);
  }
}

export default CustomError;
