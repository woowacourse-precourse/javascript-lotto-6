import ValidationError from './ValidationError/index.js';
import { NUMBER, ERROR } from '../constants/index.js';

class Validator {
  static #isNotNaturalNumber(value) {
    const num = Number(value);

    if (!Number.isNaN(value) || !Number.isSafeInteger(num) || num <= 0) {
      return false;
    }
    return true;
  }

  static validatePurchaseAmount(amount) {
    if (
      this.#isNotNaturalNumber(amount) ||
      Number(amount) % NUMBER.lottoPurchaseUnit
    ) {
      throw new ValidationError(ERROR.invalidPurchaseAmount);
    }
  }
}

export default Validator;
