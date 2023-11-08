import Validator from './validator/Validator.js';
import { ERROR_MESSAGE } from './constants/message.js';

class BonusBall {
  #number;

  constructor(number, lotto) {
    this.#validate(number, lotto);
    this.#number = number;
  }

  #validate(number, lotto) {
    Validator.range([number]);

    if (lotto.includes(number)) {
      throw new Error(ERROR_MESSAGE.INCLUSION);
    }
  }

  includedIn(lotto) {
    return lotto.includes(this.#number);
  }
}

export default BonusBall;
