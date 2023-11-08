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
}

export default Validations;