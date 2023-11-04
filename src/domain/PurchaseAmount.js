import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import PURCHASE_UNIT from '../constants/PurchaseUnit.js';
import InvalidNumberError from '../error/InvalidNumberError.js';

class PurchaseAmount {
  #purchaseAmount;

  constructor(amount) {
    PurchaseAmount.#validate(amount);
    this.#purchaseAmount = amount;
  }

  static #validate(amount) {
    PurchaseAmount.#validateIsNumber(amount);
    PurchaseAmount.#validateIsDividedByThousand(amount);
  }

  static #validateIsNumber(amount) {
    if (Number.isNaN(amount)) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateIsDividedByThousand(amount) {
    if (amount % PURCHASE_UNIT !== 0) {
      throw new InvalidNumberError(ERROR_MESSAGE.IS_NOT_DIVIDED_THOUSAND);
    }
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default PurchaseAmount;
