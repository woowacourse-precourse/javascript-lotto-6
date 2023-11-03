import { isPositiveInteger } from './utils.js';

class Cash {
  constructor(value) {
    this.#validate(value);
    this.value = Number(value);
  }

  get() {
    return this.value;
  }

  #validate(value) {
    if (!isPositiveInteger(value)) {
      throw new Error('[ERROR] 입력은 양의 정수여야 합니다.\n');
    }

    if (Number(value) % 1000 > 0) {
      throw new Error('[ERROR] 입력은 1000원 단위여야 합니다.\n');
    }
  }
}

export default Cash;
