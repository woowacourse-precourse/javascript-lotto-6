import { LOTTO_NUM_RANGE } from './constants/conditions.js';
import ERROR_MESSAGE from './constants/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.invalidLottoLength);
    }
    if (numbers.some((number) => Number.isNaN(number))) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.duplicatedLottoNum);
    }
    if (
      !numbers.every(
        (num) => num >= LOTTO_NUM_RANGE.min && num <= LOTTO_NUM_RANGE.max,
      )
    ) {
      throw new Error(ERROR_MESSAGE.invalidLottoNumRange);
    }
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
