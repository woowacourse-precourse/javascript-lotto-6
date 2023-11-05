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
    Validator.isAscending(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomLotto() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLottoNum = lottoNum.sort((a, b) => a - b);
    return new Lotto(sortedLottoNum);
  }
}

export default Lotto;
