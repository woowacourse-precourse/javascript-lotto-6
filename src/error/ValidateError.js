import { ERROR_TYPE } from '../constants/message.js';

class ValidateError extends Error {
  constructor(message) {
    super(message);
    this.name = ERROR_TYPE.validate;
  }
}

export default ValidateError;
