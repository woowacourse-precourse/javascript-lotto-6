import { GAME_RULE } from '../constants/gameRule.js';

class Money {
  #money = 0;

  setMoney(money) {
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }

  getPurchaseCount() {
    return this.#money / GAME_RULE.MIN_AMOUNT_UNIT;
  }
}

export default Money;
