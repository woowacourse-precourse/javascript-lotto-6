import { ERROR, LOTTO_NUMBER_RANGE } from '../util/constant.js';

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
    if (this.#bonus < LOTTO_NUMBER_RANGE[0] || this.#bonus > LOTTO_NUMBER_RANGE[1]) {
      throw ERROR.rangeOverInput;
    }
  }

  checkSameNumber() {
    if (this.#lotto.includes(Number(this.#bonus))) {
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
