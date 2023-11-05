import { LOTTO_ERROR } from '../constants/message/error.js';
import { LOTTO } from '../constants/setting.js';
import InputError from '../error/InputError.js';
import CommonValidator from './Common.js';

class LottoValidator {
  static validate(numbers) {
    LottoValidator.validateCount(numbers);
    LottoValidator.validateDuplication(numbers);
    LottoValidator.validateLottoNumbers(numbers);
  }

  static validateCount(numbers) {
    if (numbers.length !== LOTTO.count) {
      throw new InputError(LOTTO_ERROR.count);
    }
  }

  static validateDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new InputError(LOTTO_ERROR.duplication);
    }
  }

  static validateLottoNumbers(numbers) {
    numbers.forEach(number => {
      CommonValidator.validateIsNumber(number);
      LottoValidator.validateLottoNumber(number);
    });
  }

  static validateLottoNumber(number) {
    if (number < LOTTO.minNumber || number > LOTTO.maxNumber) {
      throw new InputError(LOTTO_ERROR.number);
    }
  }
}

export default LottoValidator;
