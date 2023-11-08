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
}

export default Validations;