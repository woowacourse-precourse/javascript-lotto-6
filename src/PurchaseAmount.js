import CONSTANTS from './constants';

class PurchaseAmount {
  #amount;

  /**
   * @param {string} amountInput
   */
  constructor(amountInput) {
    const parsed = parseInt(amountInput);

    this.#validateAtImplmentLevel(amountInput);
    this.#validateAtDomainLevel(amountInput);

    this.#amount = parsed;
  }

  /**
   * @returns {number}
   */
  getAmount() {
    return this.#amount;
  }

  /**
   * @param {number} amount
   */
  #validateAtImplmentLevel(amount) {
    if (amount === NaN) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUNT_NOT_NUMBER);
    }

    if (!Number.isSafeInteger(amount)) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUNT_TOO_LARGE);
    }
  }

  /**
   * @param {number} amount
   */
  #validateAtDomainLevel(amount) {
    if (amount < CONSTANTS.NUMBERS.LOTTO_PRICE) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUT_BELOW_PRICE);
    }

    if (amount % CONSTANTS.NUMBERS.LOTTO_PRICE !== 0) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUT_NOT_DIVISIBLE);
    }
  }
}
