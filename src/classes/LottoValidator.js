import { ERROR_MESSAGE, MAX, MIN } from "../constant/lottoConstants";

class LottoValidator {
  static validateLottoNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw ERROR_MESSAGE.MUST_BE_NUMBER;
    }
  
    if (number < MIN.LOTTO_NUMBER || number > MAX.LOTTO_NUMBER) {
      throw ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE;
    }
  }

  static validateBonusNumber(lottoNumbers, bonusNumber) {
    if (lottoNumbers.includes(bonusNumber)) {
      throw ERROR_MESSAGE.INVALID_BONUS_NUMBER;
    }
  }
}

export default LottoValidator;
