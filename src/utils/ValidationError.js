import { ERROR_PRIFIX } from '../constants/messages.js';

class ValidationError extends Error {
  #prifix = ERROR_PRIFIX;

  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }

  toString() {
    return this.#prifix + this.message;
  }
}

export default ValidationError;
