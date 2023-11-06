import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class LottoPurchase {
  static validateFormat(amount) {
    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(amount)) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_FORMAT);
    }
  }

  static validateMinimumAmount(amount) {
    if (amount < 1000) {
      throw new Error(ERROR_MESSAGES.LESS_MINIMUM_AMOUNT);
    }
  }
}

export default LottoPurchase;
