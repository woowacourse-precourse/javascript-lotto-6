// import Validator from './model/Validator.js';
import { ERROR } from '../util/constant.js';
import { Console } from '@woowacourse/mission-utils';

class Bonus {
  #number;

  constructor(bonus, lotto) {
    this.#number = bonus;
    this.#validate(bonus, lotto);
  }

  #validate(bonus, lotto) {
    this.checkWords(bonus);
    this.checkRange(Number(bonus));
    this.checkSameNumber(Number(bonus), lotto);
    // console.log(bonus, lotto);
    // return this.#number;
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
