import { START_INCLUSIVE, END_INCLUSIVE } from './constants/data.js';
import { ERROR } from './constants/messages.js';

class Bonus {
  #number;

  constructor(number, numbers) {
    this.#validate(number, numbers);
    this.#number = Number(number);
  }

  #validate(number, numbers) {
    if (!Number(number) || !Number.isInteger(Number(number)) || Number(number) < START_INCLUSIVE || Number(number) > END_INCLUSIVE) {
      throw new Error(ERROR.not_a_valid_number);
    }

    if (numbers.includes(number)) {
      throw new Error(ERROR.not_duplicate_numbers);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default Bonus;
