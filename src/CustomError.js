import ERROR from './constants/Error.js';

class CustomError extends Error {
  constructor(message) {
    super(`${message}\n`);
    this.name = `${ERROR.PREFIX}`;
  }
}

export default CustomError;
