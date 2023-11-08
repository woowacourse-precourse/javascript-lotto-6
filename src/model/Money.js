import Messages from '../utils/Messages.js';
import Constants from '../utils/Constants.js';

class Money {
  #money;
  #constants = new Constants();

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  async setMoney(money) {
    this.#validate(money);
    this.#money = money;
  }

  async getMoney() {
    return this.#money;
  }

  async getCount() {
    return this.#money / this.#constants.getLottoPriceUnit();
  }

  #validate(money) {
    const messages = new Messages();
    if (typeof money !== 'number' || isNaN(money)) {
      throw new Error(messages.getErrorMsg('notNumberMoney'));
    }
    if (money <= 0) {
      throw new Error(messages.getErrorMsg('negative'));
    }
    if (money % this.#constants.getLottoPriceUnit() !== 0) {
      throw new Error(messages.getErrorMsg('divide'));
    }
    if (money > this.#constants.getLottoPriceMax()) {
      throw new Error(messages.getErrorMsg('max'));
    }
  }
}

export default Money;
