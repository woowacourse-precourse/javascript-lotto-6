import { INPUT, ERROR } from './constants/messages.js';
import { ZERO, THOUSAND } from './constants/data.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Money {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }

  getPrice() {
    return Number(this.#price);    
  }

  #validate(price) {
    if (!Number(price) || Number(price) <= ZERO || !Number.isInteger(Number(price))) {
      throw new Error(ERROR.not_a_valid_number);
    }

    if ((Number(price) % THOUSAND) !== ZERO) {
      throw new Error(ERROR.not_a_thousand_unit);
    }
  }
}

export default Money;
