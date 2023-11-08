//@ts-check

import {
  LOTTO_NUMBER_AMOUNT,
  LOTTO_NUMBER_RANGE,
  MONEY_UNIT,
} from "../core/const";
import { PurchaseValueError, WinningNumberError } from "./Error";

export default class Assert {
  constructor() {}

  /**
   * @param {number} money
   */
  assertPurchaseValue(money) {
    if (!this.#isPositiveFiniteInteger(money))
      throw new PurchaseValueError(PurchaseValueError.TYPE_NOT_NUMBER);
    if (!this.#isEnoughMoneyToBuy(money))
      throw new PurchaseValueError(PurchaseValueError.TYPE_NOT_PURCHASED);
    if (!this.#isMoneyHasNoChange(money))
      throw new PurchaseValueError(PurchaseValueError.TYPE_HAS_MONEY_CHANGE);
  }

  /**
   * @param {string} winningNumberString
   */
  assertWinningNumber(winningNumberString) {
    const winningNumberTokens = winningNumberString.split(",");
    const winningNumbers = winningNumberTokens.map((token) =>
      parseInt(token.trim())
    );
    const uniqueWinningNumbers = new Set(winningNumbers);

    if (winningNumbers.length !== LOTTO_NUMBER_AMOUNT)
      throw new WinningNumberError(WinningNumberError.TYPE_NOT_AMOUNT_6);

    winningNumbers.forEach((winningNumber) => {
      if (!this.#isPositiveFiniteInteger(winningNumber))
        throw new WinningNumberError(WinningNumberError.TYPE_OUT_OF_RANGE);
      if (!this.#isInRange(winningNumber))
        throw new WinningNumberError(WinningNumberError.TYPE_OUT_OF_RANGE);
    });

    if (winningNumbers.length !== uniqueWinningNumbers.size)
      throw new WinningNumberError(WinningNumberError.TYPE_DUPLICATED);
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
