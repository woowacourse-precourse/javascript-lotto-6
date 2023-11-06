import CONSTANTS from './constants';

class PurchaseAmount {
  #amount;

  /**
   * @param {string} amountInput
   */
  constructor(amountInput) {
    const parsed = this.#parse(amountInput);
    this.#validate(parsed);

    this.#amount = parsed;
  }

  getAmount() {
    return this.#amount;
  }

  /**
   * @param {string} amountInput
   */
  #parse(amountInput) {
    if (amountInput.includes(' ')) {
      throw new Error(CONSTANTS.ERRORS.INCLUDE_BLANK);
    }

    const parsed = Number.parseInt(amountInput, 10);

    return parsed;
  }

  /**
   * @param {number} amount
   */
  #validate(amount) {
    this.#validateNaN(amount);
    this.#validateSafeInteger(amount);
    this.#validateNotBelowPrice(amount);
    this.#validateDivisible(amount);
  }

  /**
   * @param {*} amount
   */
  #validateNaN(amount) {
    if (amount === NaN) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUNT_NOT_NUMBER);
    }
  }

  /**
   * @param {number} amount
   */
  #validateSafeInteger(amount) {
    if (!Number.isSafeInteger(amount)) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUNT_TOO_LARGE);
    }
  }

  /**
   * @param {number} amount
   */
  #validateNotBelowPrice(amount) {
    if (amount < CONSTANTS.NUMBERS.LOTTO_PRICE) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUNT_BELOW_PRICE);
    }
  }

  /**
   * @param {number} amount
   */
  #validateDivisible(amount) {
    if (amount % CONSTANTS.NUMBERS.LOTTO_PRICE !== 0) {
      throw new Error(CONSTANTS.ERRORS.PURCHASE_AMOUNT_NOT_DIVISIBLE);
    }
  }
}

export default PurchaseAmount;
