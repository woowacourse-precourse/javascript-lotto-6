import { COMMON_NUMBER_ERROR } from '../constants/message/error.js';

class CommonValidator {
  static validateIsNumber(number) {
    if (Number.isNaN(number)) {
      throw new Error(COMMON_NUMBER_ERROR);
    }
  }
}

export default CommonValidator;
