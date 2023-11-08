import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER } from './constants.js';
import Validation from './Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers && Array.isArray(numbers)) {
      Validation.validateWinningNumbers(numbers.toString());
      this.#numbers = numbers;
    } else {
      this.#numbers = this.#generateRandomNumbers();
    }
  }

  #generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.inRangeFrom,
      LOTTO_NUMBER.inRangeTo,
      LOTTO_NUMBER.numberCount,
    ).sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
