import { ERROR } from '../messages';

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

    if (number < 1 || number > 45) {
      throw new Error(ERROR.BONUS_NUMBER.OUT_OF_RANGE);
    }
  }
}

export default Bonus;
