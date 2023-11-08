import { ERROR_MESSAGE, CONSTANT_NUMBERS } from './constants.js';

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    this.checkIfNumber(purchaseAmount);
    this.checkIfDivisibleByThousand(purchaseAmount);
  }

  static checkIfNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }

  static checkIfDivisibleByThousand(number) {
    if (number % CONSTANT_NUMBERS.THOUSAND != 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVISIBLE_BY_THOUSAND);
    }
  }

  static checkIfNumberInRange(number, lower, upper) {
    if (number < lower || number > upper) {
      throw new Error(ERROR_MESSAGE.BETWEEN_MIN_AND_MAX);
    }
  }

  static checkDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  }

  static checkWinningNumberCount(array) {
    if (array.length !== CONSTANT_NUMBERS.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.SHOULD_BE_SIX);
    }
  }

  static checkIfArrayHasThisNumber(array, number) {
    if (array.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  }
}

export default Validation;
