import Formatter from '../Formatter/index.js';
import ValidationError from './ValidationError/index.js';
import { NUMBER, ERROR, RANDOM } from '../constants/index.js';

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
    const formattedNumbers = Formatter.formatInputNumbers(numbers);
    formattedNumbers.forEach((value) => this.#isOutOfRange(value));
  }

  static validateDuplication(numbers, number) {
    if (new Set(numbers).size !== NUMBER.lottoCount) {
      throw new ValidationError(ERROR.invalidWinningNumbers);
    }

    if (number && numbers.includes(Number(number))) {
      throw new ValidationError(ERROR.invalidBonusNumber);
    }
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
    const formattedNumbers = Formatter.formatInputNumbers(numbers);

    this.#validateRangeOfNumbers(numbers);
    this.validateDuplication(formattedNumbers);
  }

  static validateBonusNumber(numbers, number) {
    this.#validateRangeOfNumbers(number);
    this.validateDuplication(numbers, number);
  }

  static validateLottoNumbers(numbers) {
    if (
      numbers.length !== NUMBER.lottoCount ||
      this.validateDuplication(numbers)
    ) {
      throw new ValidationError(ERROR.invalidLottoNumbers);
    }
  }
}

export default Validator;
