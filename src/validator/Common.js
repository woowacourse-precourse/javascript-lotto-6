import { NUMBER_ERROR } from '../constants/message/error.js';
import { LOTTO } from '../constants/setting.js';
import InputError from '../error/InputError.js';

class CommonValidator {
  static validate(number) {
    this.validateIsNumber(number);
    this.validateLottoNumberInRange(number);
  }

  static validateIsNumber(number) {
    if (Number.isNaN(number)) {
      throw new InputError(NUMBER_ERROR.type);
    }
  }

  static validateLottoNumberInRange(number) {
    if (number < LOTTO.minNumber || number > LOTTO.maxNumber) {
      throw new InputError(NUMBER_ERROR.range);
    }
  }
}

export default CommonValidator;
