import { ZERO, THOUSAND } from './constants/data.js';
import { ERROR } from './constants/messages.js';

class Money {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }

  #validate(price) {
    if (!Number(price) || Number(price) <= ZERO || !Number.isInteger(Number(price))) {
      throw new Error(ERROR.not_a_valid_number);
    }

    if ((Number(price) % THOUSAND) !== ZERO) {
      throw new Error(ERROR.not_a_thousand_unit);
    }
  }

  getPrice() {
    return Number(this.#price);    
  }
}

export default Money;
