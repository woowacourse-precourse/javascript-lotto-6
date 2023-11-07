import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import PURCHASE_UNIT from '../constants/PurchaseUnit.js';
import InvalidNumberError from '../error/InvalidNumberError.js';
import MAXIMUM_PURCHASE_MONEY from '../constants/MaximumPurchaseMoney.js';
import TooMuchError from '../error/TooMuchError.js';

class PurchaseAmount {
  #purchaseAmount;

  constructor(amount) {
    PurchaseAmount.#validate(amount);
    this.#purchaseAmount = amount;
  }

  static #validate(amount) {
    PurchaseAmount.#validateIsNumber(amount);
    PurchaseAmount.#validateIsDividedByThousand(amount);
    PurchaseAmount.#validateIsLessThanOneHundredThousand(amount);
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

  static #validateIsLessThanOneHundredThousand(amount) {
    if (amount > MAXIMUM_PURCHASE_MONEY) {
      throw new TooMuchError(ERROR_MESSAGE.TOO_MUCH_TICKETS_ERROR);
    }
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default PurchaseAmount;
