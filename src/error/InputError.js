import { ERROR_PREFIX } from '../constants/message/error.js';

class InputError extends Error {
  constructor(error) {
    super(ERROR_PREFIX + error);
    this.name = 'InputError';
  }
}

export default InputError;
