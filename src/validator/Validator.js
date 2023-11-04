import { CONSTANT, ERROR, REGEX } from '../constants/Constant.js';
import ValidationError from '../ValidationError.js';

const Validator = {
  validateAmount(amount) {
    this.checkIsNotNumber(amount);
    this.checkIsNegative(amount);
    this.checkIsNotInUnit(amount);
  },

  validateLotto(lotto) {
    this.checkIsInvalidDigit(lotto);
    this.checkHasNonNumericElements(lotto);
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

  checkIsInvalidDigit(userInput) {
    if (userInput.length !== CONSTANT.digit) {
      throw new ValidationError(ERROR.isInvalidDigit);
    }
  },

  checkHasNonNumericElements(inputs) {
    inputs.forEach((element) => {
      if (Number.isNaN(Number(element)) || element === '') {
        throw new ValidationError(ERROR.hasNonNumericElements);
      }
    });
  },
};

export default Validator;
