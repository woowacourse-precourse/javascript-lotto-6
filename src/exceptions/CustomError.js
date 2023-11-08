import { ERROR_HEADER } from '../constants/error.js';

class CustomError extends Error {
  constructor(message, name = 'CustomError') {
    super(`${ERROR_HEADER} ${message}`);
    this.name = name;
  }
}

export default CustomError;
