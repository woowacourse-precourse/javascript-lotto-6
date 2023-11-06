// import Validator from './model/Validator.js';
import { ERROR } from '../util/constant.js';

class Bonus {
  #number;

  constructor(bonus, lotto) {
    this.#validate(bonus, lotto);
    this.#number = bonus;
    return this.#number;
  }

  #validate(bonus, lotto) {
    this.checkWords(bonus);
    this.checkRange(Number(bonus));
    this.checkSameNumber(Number(bonus), lotto);
    console.log(bonus, lotto);
  }

  checkRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw ERROR.rangeOverInput;
    }
  }

  checkSameNumber(bonus, lotto) {
    if (lotto.includes(bonus)) {
      throw ERROR.sameNumber;
    }
  }

  checkWords(bonus) {
    if (/[\D]/g.test(bonus)) {
      throw ERROR.notNumberic;
    }
  }
}

export default Bonus;
