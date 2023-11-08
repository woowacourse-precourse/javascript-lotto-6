export default class MoneyManager {
  /** @type {number} */
  #purchaseValue;

  constructor() {
    this.#purchaseValue = -1;
  }

  /**
   *
   * @param {number} purchaseValue
   */
  setPurchaseValue(purchaseValue) {
    this.#purchaseValue = purchaseValue;
  }
}
