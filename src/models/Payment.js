import { ERROR_MESSAGE, LOTTO_FORM } from '../constants/index.js';
import { isInteger } from '../utils/index.js';
import CustomError from './CustomError.js';

class Payment {
  #money;
  constructor(money) {
    this.#isNumber(money);
    this.#validatePayment(money);
    this.#money = money;
  }
  /**
   *
   * @param {number} money
   */
  #isNumber(money) {
    if (!isInteger(money)) throw new CustomError(ERROR_MESSAGE.isNotNumber);
  }
  /**
   *
   * @param {number} money
   */
  #validatePayment(money) {
    if (money < LOTTO_FORM.price || money % LOTTO_FORM.price)
      throw new CustomError(ERROR_MESSAGE.payment);
  }

  getMoney() {
    return this.#money;
  }
}

export default Payment;
