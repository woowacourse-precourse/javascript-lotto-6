import { ERROR_MESSAGES } from '../constants/messages.js';

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGES.prefix} ${message}`);
  }
}

export default CustomError;
