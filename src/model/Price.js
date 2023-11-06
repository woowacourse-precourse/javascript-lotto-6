import { ERROR } from '../util/constant.js';

class Price {
  #number;

  constructor(money) {
    this.#number = money;
    this.#validate();
  }

  #validate() {
    this.notInputValue();
    this.checkWords();
    this.moneyRangeOver();
    this.notDivisibleByThousand();
  }

  notInputValue() {
    if (this.#number.trim().length === 0) {
      throw ERROR.emptyValue;
    }
  }

  checkWords() {
    if (/[\D]/g.test(this.#number)) {
      throw ERROR.notNumberic;
    }
  }

  moneyRangeOver() {
    if (Number(this.#number) < 1000) {
      throw ERROR.underThousandMoney;
    }
  }

  notDivisibleByThousand() {
    if (Number(this.#number) % 1000 !== 0) {
      throw ERROR.notDivisibleMoney;
    }
  }
}

export default Price;
