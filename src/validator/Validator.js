import { CONSTANT, ERROR, LOTTO_NUMBER } from '../constants/Constant.js';
import ValidationError from '../ValidationError.js';

const Validator = {
  validateAmount(amount) {
    this.checkIsNotNumber(amount);
    this.checkIsNegative(amount);
    this.checkIsNotInUnit(amount);
  },

  validateLotto(lotto) {
    this.checkIsInvalidCount(lotto);
    this.checkHasNonNumericElements(lotto);
    this.checkHasOutOfRange(lotto);
    this.checkHasDuplicate(lotto);
  },

  checkIsNotNumber(userInput) {
    if (Number.isNaN(Number(userInput)) || userInput === '') {
      throw new ValidationError(ERROR.isNotNumber);
    }
  },

  checkIsNotInUnit(userInput) {
    if (Number(userInput) % CONSTANT.amountUnit !== 0) {
      throw new ValidationError(ERROR.isNotInAmountUnit);
    }
  },

  checkIsNegative(userInput) {
    if (Number(userInput) <= 0) {
      throw new ValidationError(ERROR.isNegative);
    }
  },

  checkIsInvalidCount(userInput) {
    if (userInput.length !== LOTTO_NUMBER.count) {
      throw new ValidationError(ERROR.isInvalidCount);
    }
  },

  checkHasNonNumericElements(inputs) {
    inputs.forEach((element) => {
      if (Number.isNaN(Number(element)) || element === '') {
        throw new ValidationError(ERROR.hasNonNumericElements);
      }
    });
  },

  checkHasOutOfRange(inputs) {
    inputs.forEach((number) => {
      if (number < LOTTO_NUMBER.minNum || number > LOTTO_NUMBER.maxNum) {
        throw new ValidationError(ERROR.hasOutOfRange);
      }
    });
  },

  checkHasDuplicate(inputs) {
    if (inputs.length !== new Set(inputs).size) {
      throw new ValidationError(ERROR.hasDuplicate);
    }
  },
};

export default Validator;
