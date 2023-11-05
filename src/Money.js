import { INPUT, ERROR } from './constants/messages.js';
import { ZERO, THOUSAND } from './constants/data.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Money {
  #price;

  async input() {
    try {
      this.#price = await MissionUtils.Console.readLineAsync(INPUT.price);
      this.#validate(this.#price);
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
      return this.input();
    }
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
