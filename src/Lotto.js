import { ERROR_MESSAGE } from './Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length < 1) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOTHING);
    }
    if (numbers.every((num) => isNaN(num))) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_A_NUMBER);
    }
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_SIX);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.SAME_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
  get Numbers() {
    return this.#numbers;
  }
}

export default Lotto;
