import { ERROR_MESSAGE, ERROR_MESSAGE_FUNCTION } from './constants/Messages.js';
import { PURCHASE_AMOUNT } from './constants/System.js';

import handleValidationError from './utils/error/index.js';
import { isDivisibleBy, isNumber, isOverMaxPurchaseAmount } from './utils/validators/index.js';

class PurchaseAmount {
  /**
   * @type {number}
   * @private
   */
  #purchaseAmount;

  /**
   * @param {string} input
   */
  constructor(input) {
    this.#validate(input);

    this.#purchaseAmount = Number(input);
  }

  // why? private 메서드로 사용
  // eslint-disable-next-line class-methods-use-this
  #validate(input) {
    if (!isNumber(input)) handleValidationError(ERROR_MESSAGE.number);
    if (!isDivisibleBy(input, PURCHASE_AMOUNT.divisor)) {
      handleValidationError(ERROR_MESSAGE_FUNCTION.divide(PURCHASE_AMOUNT.divisor));
    }

    if (isOverMaxPurchaseAmount(input, PURCHASE_AMOUNT.max)) {
      handleValidationError(ERROR_MESSAGE_FUNCTION.purchaseAmountMax(PURCHASE_AMOUNT.max));
    }
  }

  static of(input) {
    return new PurchaseAmount(input);
  }

  /**
   * @returns {number}
   */
  getLottoCount() {
    return this.#purchaseAmount / PURCHASE_AMOUNT.divisor;
  }
}

export default PurchaseAmount;
