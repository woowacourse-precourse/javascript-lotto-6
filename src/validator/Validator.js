import { ERROR } from '../constant/message.js';
import ValidationError from './ValidationError.js';
import { BASE_AMOUNT, LOTTO_NUMBERS } from '../constant/constant.js';

const Validator = {
  validateUserInput(input) {
    this.checkIsEmpty(input);
  },

  validatePurchaseAmount(input) {
    this.checkIsInteger(input);
    this.checkIsPositive(input);
    this.checkIsInUnit(input);
  },

  validateLotto(inputs) {
    this.checkIsValidCount(inputs);
    this.checkHasNonNumeric(inputs);
    this.checkHasNotInRange(inputs);
    this.checkHasDuplicate(inputs);
  },

  validateBonusNumber(winningNumber, input) {
    this.checkIsInteger(input);
    this.checkIsInRange(input);
    this.checkHasSameNumber(winningNumber, input);
  },

  checkIsEmpty(input) {
    if (input.trim() === '') {
      throw new ValidationError(ERROR.isEmpty);
    }
  },

  checkIsInteger(input) {
    if (!this.isInteger(input)) {
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

  checkIsValidCount(inputs) {
    if (inputs.length !== LOTTO_NUMBERS.count) {
      throw new ValidationError(ERROR.invalidCount);
    }
  },

  checkHasNonNumeric(inputs) {
    inputs.forEach((input) => {
      if (!this.isInteger(input)) {
        throw new ValidationError(ERROR.hasNonNumeric);
      }
    });
  },

  checkHasNotInRange(inputs) {
    inputs.forEach((input) => {
      if (!this.isInRange(input)) {
        throw new ValidationError(ERROR.hasNotInRange);
      }
    });
  },

  checkHasDuplicate(inputs) {
    if (inputs.length !== new Set(inputs).size) {
      throw new ValidationError(ERROR.hasDuplicate);
    }
  },

  checkIsInRange(input) {
    if (!this.isInRange(input)) {
      throw new ValidationError(ERROR.isNotInRange);
    }
  },

  checkHasSameNumber(winningNumber, input) {
    if (winningNumber.includes(input)) {
      throw new ValidationError(ERROR.hasSameNumber);
    }
  },

  isInteger: (input) => !Number.isNaN(Number(input)) && Number.isInteger(Number(input)),
  isInRange: (input) => Number(input) >= LOTTO_NUMBERS.min && Number(input) <= LOTTO_NUMBERS.max,
};

export default Validator;
