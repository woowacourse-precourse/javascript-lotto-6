import ErrorMessage from '../constants/ErrorMessage.js';

class Exception {
  static isNumber(input) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(input)) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
  }

  static isValidUnit(input) {
    if (input % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PRICE);
    }
  }

  static isDuplicate(input) {
    const set = new Set(input);
    if (input.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NUMBER);
    }
  }

  static isValidDigit(input) {
    if (input.length !== 6) {
      throw new Error(ErrorMessage.INVALID_NUM_COUNT);
    }
  }

  static isValidRange(input) {
    if (input < 1 || input > 45) {
      throw new Error(ErrorMessage.INVALID_RANGE);
    }
  }

  static isAscending(input) {
    const arrStr = JSON.stringify(input);
    const sortedArrStr = JSON.stringify(input.sort((a, b) => a - b));
    if (sortedArrStr !== arrStr) {
      throw new Error(ErrorMessage.ISNOT_ASCENDING);
    }
  }
}

export default Exception;
