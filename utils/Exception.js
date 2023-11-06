import ErrorMessage from '../constants/ErrorMessage.js';

class Exception {
  static isNumber(value) {
    if (isNaN(value)) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
  }

  static isValidUnit(value) {
    if (value % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PRICE);
    }
  }

  static isDuplicate(value) {
    const set = new Set(value);
    if (value.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NUMBER);
    }
  }

  static isValidDigit(value) {
    if (value.length !== 6) {
      throw new Error(ErrorMessage.INVALID_NUM_COUNT);
    }
  }

  static isValidRange(value) {
    if (value < 1 || value > 45) {
      throw new Error(ErrorMessage.INVALID_RANGE);
    }
  }

  static isAscending(value) {
    const arrStr = JSON.stringify(value);
    const sortedArrStr = JSON.stringify(value.sort((a, b) => a - b));
    if (sortedArrStr !== arrStr) {
      throw new Error(ErrorMessage.ISNOT_ASCENDING);
    }
  }
}

export default Exception;
