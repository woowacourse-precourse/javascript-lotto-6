//@ts-check

import { LOTTO_NUMBER_RANGE, MONEY_UNIT } from "../core/const";
import { PurchaseValueError } from "./Error";

export default class Assert {
  constructor() {}

  assertPurchaseValue(money) {
    if (!this.#isPositiveFiniteInteger(money))
      throw new PurchaseValueError(PurchaseValueError.TYPE_NOT_NUMBER);
    if (!this.#isEnoughMoneyToBuy(money))
      throw new PurchaseValueError(PurchaseValueError.TYPE_NOT_PURCHASED);
    if (!this.#isMoneyHasNoChange(money))
      throw new PurchaseValueError(PurchaseValueError.TYPE_HAS_MONEY_CHANGE);
  }

  /**
   *
   * @param {number} money
   * @returns {boolean}
   */
  #isEnoughMoneyToBuy(money) {
    return money >= MONEY_UNIT;
  }

  /**
   *
   * @param {number} money
   * @returns {boolean}
   */
  #isMoneyHasNoChange(money) {
    return money % MONEY_UNIT === 0;
  }

  /**
   *
   * @param {number} num
   * @returns {boolean}
   */
  #isPositiveFiniteInteger(num) {
    if (!isFinite(num)) return false;
    if (!Number.isInteger(num)) return false;
    if (num < 0) return false;
    return true;
  }

  /**
   *
   * @param {number} num
   * @returns {boolean}
   */
  #isInRange(num) {
    if (num < LOTTO_NUMBER_RANGE.min) return false;
    if (LOTTO_NUMBER_RANGE.max < num) return false;
    return true;
  }
}
