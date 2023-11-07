import { DRAW_NUMBERS, RANDOM_NUMBER } from '../constants/numbers.js';

const InputValidator = {
  checkNaN(number) {
    if (Number.isNaN(number)) {
      return true;
    }
    return false;
  },

  checkInteger(number) {
    if (Number.isInteger(number)) {
      return true;
    }
    return false;
  },

  checkPositiveNumber(number) {
    if (number > 0) {
      return true;
    }
    return false;
  },

  checkMatchLength(length) {
    if (length === DRAW_NUMBERS) {
      return true;
    }
    return false;
  },

  checkIncludeNumber(number) {
    if (number >= RANDOM_NUMBER.from && number <= RANDOM_NUMBER.to) {
      return true;
    }
    return false;
  },

  checkIncludeNumbers(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
      const number = numbers[index];
      if (!this.checkIncludeNumber(number)) {
        return false;
      }
    }
    return true;
  },

  checkDuplicateNumber(numbers) {
    if (new Set(numbers).size === numbers.length) {
      return true;
    }
    return false;
  },
};

export default InputValidator;
