import AppError from '../errors/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class Money {
  /**
   * @type { number }
   */

  static MIN_AMOUNT = 1000;

  /**
   * @type { number }
   */
  #money;

  /**
   *
   * @param { string } money
   */

  constructor(money) {
    this.#money = Number(money);
    this.validate();
  }

  /**
   *
   * @param { string } money
   * @returns { number }
   */

  static getLottoAmount(money) {
    const moneyInstance = new Money(money);
    return moneyInstance.#money / Money.MIN_AMOUNT;
  }

  validate() {
    this.validateType();
    this.validateLack();
    this.validateDivide();
  }

  validateType() {
    if (Number.isNaN(this.#money)) {
      throw new AppError(ERROR_MESSAGES.not_a_number);
    }
  }

  validateLack() {
    if (this.#money < Money.MIN_AMOUNT) {
      throw new AppError(ERROR_MESSAGES.lack_money);
    }
  }

  validateDivide() {
    if (this.#money % Money.MIN_AMOUNT) {
      throw new AppError(ERROR_MESSAGES.not_divded);
    }
  }
}

export default Money;
