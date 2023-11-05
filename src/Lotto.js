import { Random } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.isValidDigit(numbers);
    Validator.isDuplicate(numbers);
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
