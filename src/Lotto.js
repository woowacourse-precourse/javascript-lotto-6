import { Random } from '@woowacourse/mission-utils';
import ErrorMessage from '../constants/ErrorMessage.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessage.INVALID_NUM_COUNT);
    }
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NUMBER);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomLotto() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLottoNum = lottoNum.sort((a, b) => {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    return new Lotto(sortedLottoNum);
  }
}

export default Lotto;
