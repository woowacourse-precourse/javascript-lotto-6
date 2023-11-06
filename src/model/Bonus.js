import { ERROR } from '../util/constant.js';

class Bonus {
  #bonus;
  #lotto;

  constructor(bonus, lotto) {
    this.#bonus = bonus;
    this.#lotto = lotto;
    this.#validate();
  }

  #validate() {
    this.checkWords();
    this.checkRange();
    this.checkSameNumber();
  }

  checkRange() {
    if (this.#bonus < 1 || this.#bonus > 45) {
      throw ERROR.rangeOverInput;
    }
  }

  checkSameNumber() {
    if (this.#lotto.includes(this.#bonus)) {
      throw ERROR.sameNumber;
    }
  }

  checkWords() {
    if (/[\D]/g.test(this.#bonus)) {
      throw ERROR.notNumberic;
    }
  }
}

export default Bonus;
