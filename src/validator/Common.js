import { COMMON_NUMBER_ERROR } from '../constants/message/error.js';
import InputError from '../error/InputError.js';

class CommonValidator {
  static validateIsNumber(number) {
    if (Number.isNaN(number)) {
      throw new InputError(COMMON_NUMBER_ERROR);
    }
  }
}

export default CommonValidator;
