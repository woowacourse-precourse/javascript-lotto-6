import { Random } from '@woowacourse/mission-utils';
import message from '../utils/message.js';

class IssuedLotto {
  #list;

  #count;

  constructor(count) {
    this.#list = [];
    this.#validate(count);
    this.#count = count / 1000;
  }

  #validate(count) {
    if (/[^0-9]/g.test(count)) {
      throw new Error(message.ERROR_MUST_BE_NUMBER_OVER_1000);
    } else if (count < 1000) {
      throw new Error(message.ERROR_MUST_BE_NUMBER_OVER_1000);
    } else if (count % 1000 !== 0) {
      throw new Error(message.ERROR_MUST_BE_UNIT_OF_1000);
    }
  }

  createLottos() {
    for (let i = 0; i < this.#count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#list.push(lotto);
    }
  }

  getList() {
    return this.#list;
  }

  getCount() {
    return this.#count;
  }
}

export default IssuedLotto;
