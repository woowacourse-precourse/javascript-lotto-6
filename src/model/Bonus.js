import { ERROR } from '../constants/Message.js';

class Bonus {
  #bonusNumber;

  constructor(number) {
    this.#validate(number);
    this.#bonusNumber = number;
  }

  #validate(number) {
    this.#validateNumber(number);
  }

  #validateNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.NUMBER);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
