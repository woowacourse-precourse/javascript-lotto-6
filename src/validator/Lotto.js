import { LOTTO_ERROR } from '../constants/message/error.js';
import { LOTTO } from '../constants/setting.js';

class LottoValidator {
  static validate(numbers) {
    LottoValidator.validateCount(numbers);
    LottoValidator.validateDuplication(numbers);
    LottoValidator.validateRange(numbers);
  }

  static validateCount(numbers) {
    if (numbers.length !== LOTTO.count) {
      throw new Error(LOTTO_ERROR.count);
    }
  }

  static validateDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(LOTTO_ERROR.duplication);
    }
  }

  static validateRange(numbers) {
    numbers.forEach(number => LottoValidator.validateLottoNumber(number));
  }

  static validateLottoNumber(number) {
    if (number < LOTTO.minNumber || number > LOTTO.maxNumber) {
      throw new Error(LOTTO_ERROR.number);
    }
  }
}

export default LottoValidator;
