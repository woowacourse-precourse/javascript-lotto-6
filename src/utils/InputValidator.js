import { DRAW_NUMBERS } from '../constants/numbers.js';

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
};

export default InputValidator;
