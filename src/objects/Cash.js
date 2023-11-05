import { ERROR } from '../messages.js';
import { isPositiveInteger } from '../utils.js';

class Cash {
  constructor(value) {
    this.#validate(value);
    this.value = Number(value);
  }

  getValue() {
    return this.value;
  }

  #validate(value) {
    if (!isPositiveInteger(value)) {
      throw new Error(ERROR.CASH.NOT_POSITIVE_INTEGER);
    }

    if (Number(value) % 1000 > 0) {
      throw new Error(ERROR.CASH.UNIT);
    }
  }
}

export default Cash;
