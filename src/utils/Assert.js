//@ts-check

import {
  WINNING_NUMBER_AMOUNT,
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
    const winningNumbers = this.#extractWiningNumbersFrom(winningNumberString);

    if (this.#isExactWinningNumberAmount(winningNumbers))
      throw new WinningNumberError(WinningNumberError.TYPE_NOT_AMOUNT_6);

    winningNumbers.forEach((winningNumber) => {
      if (!this.#isPositiveFiniteInteger(winningNumber))
        throw new WinningNumberError(WinningNumberError.TYPE_OUT_OF_RANGE);
      if (!this.#isInRange(winningNumber))
        throw new WinningNumberError(WinningNumberError.TYPE_OUT_OF_RANGE);
    });

    if (!this.#hasAllUniqueArgumentsIn(winningNumbers))
      throw new WinningNumberError(WinningNumberError.TYPE_DUPLICATED);
  }

  /**
   *
   * @param {string} str
   * @returns {number[]}
   */
  #extractWiningNumbersFrom(str) {
    return str
      .split(",")
      .map((token) => token.trim())
      .map((token) => parseInt(token));
  }

  /**
   *
   * @param {any[]} arr
   * @returns {boolean}
   */
  #hasAllUniqueArgumentsIn(arr) {
    const uniqueArr = new Set(arr);
    return arr.length === uniqueArr.size;
  }

  /**
   *
   * @param {any[]} winningNumbers
   * @returns {boolean}
   */
  #isExactWinningNumberAmount(winningNumbers) {
    return winningNumbers.length !== WINNING_NUMBER_AMOUNT;
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
