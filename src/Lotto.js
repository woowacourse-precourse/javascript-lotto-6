import * as NUMBER from './constant/Number.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(num) {
    if (num.length !== NUMBER.LOTTO_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const set = new Set(num);
    if (num.length != set.size) {
      throw new Error('[ERROR] 로또 번호가 중복됩니다.');
    }
  }

  result() {
    return this.#numbers;
  }
}

export default Lotto;