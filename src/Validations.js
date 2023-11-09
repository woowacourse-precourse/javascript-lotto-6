import Errors from './constants/Errors.js';

class Validations {
  static hasSpace(input) {
    if (/\s+/.test(input)) {
      throw new Error(Errors.HAS_SPACE);
    }
  }

  static isNumber(input) {
    const number = Number(input);
    if (input.length === 0 || Number.isNaN(number)) {
      throw new Error(Errors.NOT_NUMBER);
    }
  }

  static isPlus(input) {
    const number = Number(input);
    if (number <= 0) {
      throw new Error(Errors.IS_NOT_PLUS);
    }
  }

  static isThousandUnit(input) {
    const number = Number(input);
    if (number % 1000 !== 0) {
      throw new Error(Errors.IS_NOT_THOUSAND_UNIT);
    }
  }

  static isInRange(input) {
    const number = Number(input);
    if (number < 1 || number > 45) {
      throw new Error(Errors.IS_NOT_IN_RANGE);
    }
  }

  static isInteger(input) {
    const number = Number(input);
    if (!Number.isInteger(number)) {
      throw new Error(Errors.IS_NOT_INTEGER);
    }
  }

  static isNotDuplicated(input) {
    input.forEach((number, index) => {
      if (input.indexOf(number) !== index) {
        throw new Error(Errors.IS_NOT_DUPLICATED);
      }
    });
  }

  static isProperLength(input) {
    if (input.length !== 6) {
      throw new Error(Errors.IS_NOT_PROPER_LENGTH);
    }
  }

  static isSorted(input) {
    const sortedInput = [...input].sort((a, b) => a - b);
    if (JSON.stringify(input) !== JSON.stringify(sortedInput)) {
      throw new Error(Errors.IS_NOT_SORTED);
    }
  }
}

export default Validations;