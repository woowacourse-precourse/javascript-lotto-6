import {ERROR} from "../constants/constants.js";

export class Money {
  /**
   * @type {number}
   *
   */
  #amount;

  /**
   *
   * @param {number} amount
   */
  constructor(amount) {
    this.#validateUnit(amount);
    this.#amount = amount;
  }

  /**
   *
   * @return {boolean}
   */
  get isZero() {
    return this.#amount === 0;
  }

  /**
   *
   * @return {number}
   */
  get amount() {
    return this.#amount;
  }

  /**
   *
   * @param {number} amount
   * @description Money 객체의 잔액에 돈 추가 (테스트 로직을 위해)
   * @return {void}
   */
  add(amount) {
    const sum = this.#amount + amount;
    //항상 음수인지 검증해 이상한 데이터 안들어오게
    this.#validateAmount(sum);
    this.#amount = sum;
  }

  /**
   *
   * @param {number} amount
   * @description Money 객체의 잔액에 돈 빼기
   * @return {void}
   */
  subtract(amount) {
    const sum = this.#amount - amount;
    //항상 음수인지 검증해 이상한 데이터 안들어오게
    this.#validateAmount(sum);
    this.#amount = sum;
  }

  /**
   *
   * @param {number} amount
   * @return {void}
   */

  #validateUnit(amount) {
    //1000원으로 나누어떨어지지 않을 경우
    if (amount % 1000 !== 0) {
      throw new Error(ERROR.MONEY_UNIT_ERROR);
    }
  }

  /**
   *
   * @return {void}
   */
  #validateAmount(sum) {
    // 잔액은 0 미만이 될 수 없음
    if (sum < 0) {
      throw new Error(ERROR.UNDER_ZERO_ERROR);
    }
  }
}
