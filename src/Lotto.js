import { LOTTO, ERROR_MESSAGE } from './Constants.js';

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
    if (numbers.some((num) => isNaN(num))) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_A_NUMBER);
    }
    if (numbers.length !== LOTTO.NUMBER_RANGE.PICK) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_SIX);
    }
    if (new Set(numbers).size !== LOTTO.NUMBER_RANGE.PICK) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.SAME_NUMBER);
    }
    if (numbers.some((num) => num < LOTTO.NUMBER_RANGE.FROM || num > LOTTO.NUMBER_RANGE.TO)) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS.OUT_OF_RANGE);
    }
  }

  // TODO: 추가 기능 구현
  get Numbers() {
    return this.#numbers;
  }
}

export default Lotto;
