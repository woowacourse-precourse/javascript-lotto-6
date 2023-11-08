import MESSAGE from '../constants/message.js';

class InputError extends Error {
  constructor(errorMessage) {
    super(`${MESSAGE.error.prefix} ${errorMessage}`);
  }
}

export default InputError;
