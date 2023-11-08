import { ERROR_MESSAGES } from "./Constants.js";

class Validation {
  static validateArrayEmpty(array) {
    if (array.includes('')) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static validateNumberEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    }
  }

  static validateInputThousandWonUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVAID_PURCHASE_AMOUNT);
    }
  }

  static validateHasDuplicate(input) {
    const uniqueNumbers = new Set(input);
    if (uniqueNumbers.size !== input.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }
  }

  static validateHasDuplicateArrayAndNumber(array, input) {
    if (array.includes(input)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }
  }

  static validateNumberOfRange(input) {
    if (input < 1 || input > 45) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE);
    }
  }

  static validateArrayOfRange(array) {
    console.log(array);
    if (array.some(number => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }
  }

  static validateArrayIsNumber(array) {
    if (array.some(number => isNaN(number))) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    }
  }

  static validateArrayLength(array) {
    if (array.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
    }
  }
}

export default Validation;
