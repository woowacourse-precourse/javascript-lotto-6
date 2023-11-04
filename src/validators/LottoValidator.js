import { LOTTO_ERROR_MESSAGE } from '../constant.js';
import ValidationError from '../errors/ValidationError.js';

class LottoValidator {
  static isLotto(lotto) {
    LottoValidator.isSixDigit(lotto);
    LottoValidator.isDuplicate(lotto);
    LottoValidator.isLottoNumberRange(lotto);

    return true;
  }

  static isSixDigit(lotto) {
    if (lotto.length === 6) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.six_digit);
  }

  static isDuplicate(lotto) {
    const deduplicate = new Set(lotto);

    if (deduplicate.size === 6) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.duplicate);
  }

  static isLottoNumberRange(lotto) {
    if (lotto.every((number) => number >= 1 && number <= 45)) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.range);
  }

  static bonusValidate(winningNumbers, bonusNumber) {
    this.duplicateBonusNumber(winningNumbers, bonusNumber);
    this.isLottoNumberRange(bonusNumber);

    return true;
  }

  static duplicateBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.find(bonusNumber)) {
      throw new ValidationError(LOTTO_ERROR_MESSAGE.input_six_digit);
    }

    return true;
  }
}
export default LottoValidator;
