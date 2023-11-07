import ValidationError from './ValidationError/index.js';
import { NUMBER, ERROR, RANDOM } from '../constants/index.js';

class Validator {
  static isNotNaturalNumber(value) {
    const num = Number(value);

    if (Number.isNaN(value) || !Number.isSafeInteger(num) || num <= 0) {
      return true;
    }
    return false;
  }

  static isOutOfRange(number) {
    if (
      this.isNotNaturalNumber(number) ||
      number > RANDOM.max ||
      number < RANDOM.min
    ) {
      throw new ValidationError(ERROR.outOfRange);
    }
  }

  static validateRangeOfNumbers(numbers) {
    if (!numbers.length) {
      throw new ValidationError(ERROR.outOfRange);
    }
    numbers.forEach((number) => this.isOutOfRange(number));
  }

  static validateDuplication(numbers) {
    if (
      new Set(numbers).size !== NUMBER.lottoCount ||
      numbers.length !== NUMBER.lottoCount
    ) {
      throw new ValidationError(ERROR.invalidLottoNumbers);
    }
  }

  static validatePurchaseAmount(amount) {
    if (
      this.isNotNaturalNumber(amount) ||
      Number(amount) % NUMBER.lottoPurchaseUnit
    ) {
      throw new ValidationError(ERROR.invalidPurchaseAmount);
    }
  }

  static validateLottoNumbers(numbers) {
    this.validateDuplication(numbers);
  }
}

export default Validator;
