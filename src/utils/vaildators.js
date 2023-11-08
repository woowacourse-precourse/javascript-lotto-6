import { ERROR, CONSTANT } from '../constants/constants';
import { printError } from './errorPrinter';

class Validator {
  static isSixNumbers(numbers) {
    if (numbers.length !== CONSTANT.LOTTO_NUMBER_LENGTH) {
      throw printError(ERROR.INVALID_LOTTO_LENGTH);
    }
  }

  static hasDuplicateNumbers(numbers) {
    const numberSet = new Set();

    for (const number of numbers) {
      numberSet.add(number);
    }

    const originLength = numbers.length;
    const setLength = numberSet.size;

    if (originLength !== setLength) {
      throw printError(ERROR.DUPLICATE_NUMBER);
    }
  }

  static isNaN(number) {
    if (Number.isNaN(number)) {
      throw printError(ERROR.INVALID_NUMBER);
    }
  }

  static isDouble(number) {
    if (!Number.isInteger(number)) {
      throw printError(ERROR.INVALID_INTEGER);
    }
  }

  static isDivisibleBy1000(number) {
    if (number % CONSTANT.ONE_THOUSAND) {
      throw printError(ERROR.NOT_DIVISIBLE_BY_1000);
    }
  }
}

export default Validator;
