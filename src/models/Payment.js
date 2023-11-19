import { ERROR_MESSAGE, LOTTO_FORM } from '../constants/index.js';
import { ErrorController } from '../controllers/index.js';
import { isInteger } from '../utils/index.js';

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
    if (!isInteger(money))
      ErrorController.throwError(ERROR_MESSAGE.isNotNumber);
  }
  /**
   *
   * @param {number} money
   */
  #validatePayment(money) {
    if (money < LOTTO_FORM.price || money % LOTTO_FORM.price)
      ErrorController.throwError(ERROR_MESSAGE.payment);
  }

  getMoney() {
    return this.#money;
  }
}

export default Payment;
