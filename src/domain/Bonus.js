import { LOTTO } from '../data.js';
import { ERROR } from '../messages.js';

class Bonus {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  getValue() {
    return this.#number;
  }

  #validate(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR.BONUS_NUMBER.NOT_INTEGER);
    }

    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR.BONUS_NUMBER.OUT_OF_RANGE);
    }
  }
}

export default Bonus;
