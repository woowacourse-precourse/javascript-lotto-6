import { LOTTO_NUM_RANGE } from './constants/conditions.js';
import ERROR_MESSAGE from './constants/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /*
  🤔당첨번호와 중복여부도 판단해야하는지?
  */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.invalidLottoLength);
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
