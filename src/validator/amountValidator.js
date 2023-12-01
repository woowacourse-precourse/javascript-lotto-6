import { ERROR } from '../constants/messages.js';
import { NUMBERS } from '../constants/constants.js';

import CustomError from '../utils/CustomError.js';

class AmountValidator {
  static validation(amount) {
    this.#checkEmpty(amount);
    this.#checkNumber(amount);
    this.#checkUnit(amount);
    this.#checkMaxAmount(amount);
  }

  static #checkEmpty(amount) {
    if (amount.length === 0) {
      throw new CustomError(ERROR.emptyAmountInput);
    }
  }

  static #checkNumber(amount) {
    if (Number.isNaN(Number(amount))) {
      throw new CustomError(ERROR.notNumber);
    }
  }

  static #checkUnit(amount) {
    if (amount % NUMBERS.purchaseUnit) {
      throw new CustomError(ERROR.invalidUnit);
    }
  }

  static #checkMaxAmount(amount) {
    if (amount > NUMBERS.maxAmount) {
      throw new CustomError(ERROR.overMaxAmount);
    }
  }
}

export default AmountValidator;