import { ErrorMessages } from '../constants/Messages.js';
import { LottoConstants } from '../constants/Constants.js';

class ValidatorUtil {
  static isNumberValidate(input) {
    if (!Number.isInteger(input)) throw new Error(ErrorMessages.NOT_NUMBER);
  }

  static isPositiveNumberValidate(input) {
    if (input <= 0) throw new Error(ErrorMessages.NOT_POSITIVE_NUMBER);
  }

  static isMultiplesOf1000Validate(input) {
    if (input % 1000 != 0) throw new Error(ErrorMessages.NOT_MULTIPLES_OF_1000);
  }

  static isNumberInRangeValidate(input) {
    if (input < LottoConstants.MIN_NUM || input > LottoConstants.MAX_NUM)
      throw new Error(ErrorMessages.NOT_NUMBER_IN_RANGE);
  }

  static lengthValidate(input) {
    if (input.length !== LottoConstants.LENGTH)
      throw new Error(ErrorMessages.NOT_LENGTH_6);
  }

  static duplicationValidate(input, bonusNumber) {
    const inputToSet = new Set(input);

    /**
     * 1. 로또번호 6자리 내에서 중복 발생하는 경우
     * 2. 보너스 번호가 로또번호와 중복 발생하는 경우
     */
    if (inputToSet.size !== input.length)
      throw new Error(ErrorMessages.NOT_QNIQUE_NUMBERS);
    if (input.includes(bonusNumber))
      throw new Error(ErrorMessages.NOT_QNIQUE_BONUS_NUMBERS);
  }
}

export default ValidatorUtil;
