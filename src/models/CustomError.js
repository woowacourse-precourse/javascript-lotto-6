import { ERROR_MESSAGE } from '../constants/Message.js';

class CustomError extends Error {
  /**
   * @param {string} error
   */
  constructor(error) {
    const message = `${ERROR_MESSAGE.header}${error}`;
    super(message);
  }
}

export default CustomError;
