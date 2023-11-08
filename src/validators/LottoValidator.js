import { LOTTO_SETTING } from '../constants/Setting.js';
import { EXCEPTION_MESSAGE } from '../constants/ExceptionMessage.js';

class LottoValidator {
  static validateLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_SETTING.numbersLength) {
      throw new Error(EXCEPTION_MESSAGE.lottoNumbersLength);
    }
    if (new Set(numbers).size !== LOTTO_SETTING.numbersLength) {
      throw new Error(EXCEPTION_MESSAGE.lottoNumberIsDuplicated);
    }
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(EXCEPTION_MESSAGE.lottoNumberFormat);
      }
      if (number < LOTTO_SETTING.minNumber || number > LOTTO_SETTING.maxNumber) {
        throw new Error(EXCEPTION_MESSAGE.lottoNumberFormat);
      }
    });
  }

  static validateBonusNumber(bonusNumber, numbers) {
    if (isNaN(bonusNumber)) {
      throw new Error(EXCEPTION_MESSAGE.bonusNumberFormat);
    }
    if (numbers.includes(bonusNumber)) {
      throw new Error(EXCEPTION_MESSAGE.bonusNumberIsDuplicated);
    }
    if (bonusNumber < LOTTO_SETTING.minNumber || bonusNumber > LOTTO_SETTING.maxNumber) {
      throw new Error(EXCEPTION_MESSAGE.bonusNumberFormat);
    }
  }
}

export default LottoValidator;
