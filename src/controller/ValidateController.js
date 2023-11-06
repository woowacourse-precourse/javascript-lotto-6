import { ERROR_MESSAGES } from '../constant.js';

export default class ValidateController {
  validateAmount(amount) {
    const REGEX = /[^0-9]/;

    if (REGEX.test(amount) || amount % 1000) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  }

  validateBonusNumber(num) {
    if (1 > num || 45 < num) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }
}
