import { ERROR } from '../constant/message.js';
import ValidationError from './ValidationError.js';

const Validator = {
  validateUserInput(input) {
    this.checkIsEmpty(input);
  },

  checkIsEmpty(input) {
    if (input.trim() === '') {
      throw new ValidationError(ERROR.isEmpty);
    }
  },

  isNumber: (input) => Number.isNaN(Number(input)),
};

export default Validator;
