import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import PURCHASE_UNIT from '../constants/PurchaseUnit.js';
import InvalidNumberError from '../error/InvalidNumberError.js';
import MAXIMUM_PURCHASE_MONEY from '../constants/MaximumPurchaseMoney.js';
import TooMuchError from '../error/TooMuchError.js';
import EmptyInputError from '../error/EmptyInputError.js';
import { EMPTY } from '../constants/Utils.js';

class PurchaseAmount {
  #purchaseAmount;

  constructor(amount) {
    PurchaseAmount.#validate(amount);
    this.#purchaseAmount = Number(amount);
  }

  static #validate(amount) {
    PurchaseAmount.#validateIsNotEmpty(amount);
    PurchaseAmount.#validateIsNumber(Number(amount));
    PurchaseAmount.#validateIsNaturalNumber(Number(amount));
    PurchaseAmount.#validateIsDividedByThousand(Number(amount));
    PurchaseAmount.#validateIsLessThanOneHundredThousand(Number(amount));
  }

  static #validateIsNotEmpty(amount) {
    if (amount.length === EMPTY) {
      throw new EmptyInputError(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static #validateIsNumber(amount) {
    if (Number.isNaN(amount)) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateIsNaturalNumber(amount) {
    if (amount <= EMPTY) {
      throw new InvalidNumberError(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    }
  }

  static #validateIsDividedByThousand(amount) {
    if (amount % PURCHASE_UNIT !== 0) {
      throw new InvalidNumberError(ERROR_MESSAGE.IS_NOT_DIVIDED_THOUSAND);
    }
  }

  static #validateIsLessThanOneHundredThousand(amount) {
    if (amount > MAXIMUM_PURCHASE_MONEY) {
      throw new TooMuchError(ERROR_MESSAGE.TOO_MUCH_TICKETS);
    }
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default PurchaseAmount;
