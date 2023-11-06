import { ZERO, THOUSAND } from './constants/data.js';
import { ERROR } from './constants/messages.js';

class Money {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = Number(price);
  }

  #validate(price) {
    if (!Number(price) || !Number.isInteger(Number(price)) || Number(price) <= ZERO) {
      throw new Error(ERROR.not_a_valid_price);
    }

    if ((Number(price) % THOUSAND) !== ZERO) {
      throw new Error(ERROR.not_a_thousand_unit);
    }
  }

  getPrice() {
    return this.#price;
  }
}

export default Money;
