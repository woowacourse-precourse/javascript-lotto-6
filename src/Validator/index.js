import ValidationError from './ValidationError/index.js';
import { NUMBER, ERROR, RANDOM, SYMBOLS } from '../constants/index.js';

class Validator {
  static #isNotNaturalNumber(value) {
    const num = Number(value);

    if (Number.isNaN(value) || !Number.isSafeInteger(num) || num <= 0) {
      return true;
    }
    return false;
  }

  static #isOutOfRange(number) {
    if (
      this.#isNotNaturalNumber(number) ||
      number > RANDOM.max ||
      number < RANDOM.min
    ) {
      throw new ValidationError(ERROR.outOfRange);
    }
  }

  static #validateRangeOfNumbers(numbers) {
    numbers
      .replace(/\s/g, '')
      .split(SYMBOLS.numberDivider)
      .filter(Boolean)
      .forEach((value) => this.#isOutOfRange(value));
  }

  static validatePurchaseAmount(amount) {
    if (
      this.#isNotNaturalNumber(amount) ||
      Number(amount) % NUMBER.lottoPurchaseUnit
    ) {
      throw new ValidationError(ERROR.invalidPurchaseAmount);
    }
  }

  static validateWinningNumbers(numbers) {
    this.#validateRangeOfNumbers(numbers);
  }

  static validateBonusNumber(number) {
    this.#validateRangeOfNumbers(number);
  }

  static validateLottoNumbers(numbers) {
    if (
      numbers.length !== NUMBER.lottoCount ||
      new Set(numbers).size !== NUMBER.lottoCount
    ) {
      throw new ValidationError(ERROR.invalidLottoNumbers);
    }
  }
}

export default Validator;
