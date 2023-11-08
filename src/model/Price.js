import { ERROR, NUMBERS } from '../util/constant.js';

class Price {
  #money;

  constructor(money) {
    this.#money = money;
    this.#validate();
  }

  #validate() {
    this.notInputValue();
    this.checkWords();
    this.moneyRangeOver();
    this.notDivisibleByThousand();
  }

  notInputValue() {
    if (!this.#money.trim().length) {
      throw ERROR.emptyValue;
    }
  }

  checkWords() {
    if (/[\D]/g.test(this.#money)) {
      throw ERROR.notNumberic;
    }
  }

  moneyRangeOver() {
    if (Number(this.#money) < NUMBERS.minimumMoney) {
      throw ERROR.underThousandMoney;
    }
  }

  notDivisibleByThousand() {
    if (Number(this.#money) % NUMBERS.unitOfMoney) {
      throw ERROR.notDivisibleMoney;
    }
  }
}

export default Price;
