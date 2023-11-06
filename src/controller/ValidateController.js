import { ERROR_MESSAGES } from '../constant.js';

export default class ValidateController {
  validateAmount(amount) {
    const REGEX = /[^0-9]/;

    if (REGEX.test(amount) || amount % 1000) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  }
}
