import { ERROR } from '../constant/message.js';
import ValidationError from './ValidationError.js';
import { BASE_AMOUNT } from '../constant/constant.js';

const Validator = {
  validateUserInput(input) {
    this.checkIsEmpty(input);
  },

  validatePurchaseAmount(input) {
    this.checkIsNumber(input);
    this.checkIsPositive(input);
    this.checkIsInUnit(input);
  },

  checkIsEmpty(input) {
    if (input.trim() === '') {
      throw new ValidationError(ERROR.isEmpty);
    }
  },

  checkIsNumber(input) {
    if (!this.isNumber(input)) {
      throw new ValidationError(ERROR.isNotNumber);
    }
  },

  checkIsPositive(input) {
    if (Number(input) <= 0) {
      throw new ValidationError(ERROR.isNotPositive);
    }
  },

  checkIsInUnit(input) {
    if (Number(input) % BASE_AMOUNT !== 0) {
      throw new ValidationError(ERROR.isNotInUnit);
    }
  },

  isNumber: (input) => Number.isNaN(Number(input)),
};

export default Validator;
