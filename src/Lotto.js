import { ERROR } from './constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.outOfRange(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw ERROR.INVALID_LENGTH;
    }
  }
  outOfRange(numbers) {
    if (numbers.some((num) => !(num >= 1 && num <= 45))) throw ERROR.OUT_OF_RANGE;
  }
  #duplicate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) throw ERROR.DUPLICATE_NUMBER;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
