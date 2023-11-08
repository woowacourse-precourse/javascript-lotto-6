//@ts-check

import { WINNING_PRICES } from "../const.js";

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

  /**
   *
   * @param {{
   *    three: number;
   *    four: number;
   *    five: number;
   *    bonusFive: number;
   *    six: number;
   * }} board
   * @returns {number}
   */
  calculateTotalReturns(board) {
    const entries = Object.entries(board);

    return entries
      .map(([fieldName, amount]) => WINNING_PRICES[fieldName] * amount)
      .reduce((acc, cur) => acc + cur, 0);
  }

  /**
   * @param {number} returns
   * @returns {number}
   */
  calculateReturnRate(returns) {
    return (returns / this.#purchaseValue) * 100;
  }
}
