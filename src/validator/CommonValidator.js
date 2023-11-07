import { COMMON_ERROR, LOTTO_ERROR } from '../constants/message/error.js';
import { LOTTO_NUMBER } from '../constants/setting.js';
import InputError from '../error/InputError.js';

class CommonValidator {
  static validate(number) {
    this.validateIsNumber(number);
    this.validateLottoNumberInRange(number);
  }

  static validateIsNumber(number) {
    if (Number.isNaN(number)) {
      throw new InputError(COMMON_ERROR.number);
    }
  }

  static validateLottoNumberInRange(number) {
    if (number < LOTTO_NUMBER.min || number > LOTTO_NUMBER.max) {
      throw new InputError(LOTTO_ERROR.range);
    }
  }
}

export default CommonValidator;
