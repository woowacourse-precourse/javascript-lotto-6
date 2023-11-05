import { LOTTO_ERROR_MESSAGE, ONLY_NUMBER_REGEXP } from '../constant.js';
import ValidationError from '../errors/ValidationError.js';

class LottoValidator {
  static isLotto(lotto) {
    LottoValidator.isSixDigit(lotto);
    LottoValidator.isDuplicate(lotto);
    LottoValidator.isLottoNumberRange(lotto);

    return true;
  }

  static isSixDigit(lotto) {
    const inputLotto = this.getInputNumberArray(lotto);

    if (inputLotto.length === 6) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.six_digit);
  }

  static isDuplicate(lotto) {
    const inputLotto = this.getInputNumberArray(lotto);
    const deduplicate = new Set(inputLotto);

    if (deduplicate.size === 6) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.duplicate);
  }

  static isLottoNumberRange(lotto) {
    const inputLotto = this.getInputNumberArray(lotto);
    if (inputLotto.every((number) => number >= 1 && number <= 45)) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.out_of_range);
  }

  static bonusValidate(winningNumbers, bonusNumber) {
    this.isNumber(bonusNumber);
    this.duplicateBonusNumber(winningNumbers, bonusNumber);
    this.isLottoNumberRange(bonusNumber);

    return true;
  }

  static duplicateBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new ValidationError(LOTTO_ERROR_MESSAGE.duplicated_bonus);
    }

    return true;
  }

  static isNumber(number) {
    if (ONLY_NUMBER_REGEXP.test(number)) {
      return true;
    }

    throw new ValidationError(LOTTO_ERROR_MESSAGE.out_of_range);
  }

  static getInputNumberArray(input) {
    let result = [];

    if (typeof input === 'string') {
      result = input.split(',').map(Number);
    }

    if (Array.isArray(input)) {
      result = input.map(Number);
    }

    return result;
  }
}
export default LottoValidator;
