//@ts-check

import {
  WINNING_NUMBER_AMOUNT,
  LOTTO_NUMBER_RANGE,
  MONEY_UNIT,
} from "./const.js";
import {
  BonusNumberError,
  PurchaseValueError,
  WinningNumberError,
} from "../utils/Error.js";

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
   * @param {number[]} winningNumbers
   */
  assertWinningNumber(winningNumbers) {
    if (this.#isExactWinningNumberAmount(winningNumbers))
      throw new WinningNumberError(WinningNumberError.TYPE_NOT_AMOUNT_6);

    winningNumbers.forEach((winningNumber) => {
      if (!this.#isValidLottoNumber(winningNumber))
        throw new WinningNumberError(WinningNumberError.TYPE_OUT_OF_RANGE);
    });

    if (!this.#hasAllUniqueArgumentsIn(winningNumbers))
      throw new WinningNumberError(WinningNumberError.TYPE_DUPLICATED);
  }

  /**
   *
   * @param {number} bonusNumber
   * @param {number[]} winningNumbers
   */
  assertBounsNumber(bonusNumber, winningNumbers) {
    if (!this.#isValidLottoNumber(bonusNumber))
      throw new BonusNumberError(BonusNumberError.TYPE_OUT_OF_RANGE);

    if (!this.#hasAllUniqueArgumentsIn([...winningNumbers, bonusNumber]))
      throw new BonusNumberError(BonusNumberError.TYPE_DUPLICATED);
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
   * @param {number} number
   * @returns {boolean}
   */
  #isValidLottoNumber(number) {
    if (!this.#isPositiveFiniteInteger(number)) return false;
    if (!this.#isInRange(number)) return false;
    return true;
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
