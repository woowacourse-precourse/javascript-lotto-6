import ERROR from '../constants/Error.js';

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX}${message}\n`);
  }
}

export default CustomError;
