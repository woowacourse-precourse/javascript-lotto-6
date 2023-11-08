import { CONSTANT, ERROR, LOTTO_NUMBER } from '../constants/Constant.js';
import ValidationError from './ValidationError.js';

const Validator = {
  checkIsNotNumber(input) {
    if (this.isNotNumber(input)) {
      throw new ValidationError(ERROR.isNotNumber);
    }
  },

  checkIsNotInUnit(input) {
    if (Number(input) % CONSTANT.amountUnit !== 0) {
      throw new ValidationError(ERROR.isNotInAmountUnit);
    }
  },

  checkIsNotPositive(input) {
    if (Number(input) <= 0) {
      throw new ValidationError(ERROR.isNotPositive);
    }
  },

  checkIsInvalidCount(input) {
    if (input.length !== LOTTO_NUMBER.count) {
      throw new ValidationError(ERROR.isInvalidCount);
    }
  },

  checkHasNonNumericElements(inputs) {
    inputs.forEach((element) => {
      if (this.isNotNumber(element)) {
        throw new ValidationError(ERROR.hasNonNumericElements);
      }
    });
  },

  checkIsOutOfRange(input) {
    if (this.isOutOfRange(input)) {
      throw new ValidationError(ERROR.isOutOfRange);
    }
  },

  checkHasOutOfRange(inputs) {
    inputs.forEach((number) => {
      if (this.isOutOfRange(number)) {
        throw new ValidationError(ERROR.hasOutOfRange);
      }
    });
  },

  checkHasDuplicate(inputs) {
    if (inputs.length !== new Set(inputs).size) {
      throw new ValidationError(ERROR.hasDuplicate);
    }
  },

  isOutOfRange: (input) =>
    Number(input) < LOTTO_NUMBER.minNum || Number(input) > LOTTO_NUMBER.maxNum,

  isNotNumber: (input) => Number.isNaN(Number(input)) || input === '',
};

export default Validator;
