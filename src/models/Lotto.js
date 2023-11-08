import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTO_NUMBER } from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers && Array.isArray(numbers)) {
      this.#validateNumbers(numbers);
      this.#numbers = numbers;
    } else {
      this.#numbers = this.#generateRandomNumbers();
    }
  }

  #validateNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBER.numberCount) {
      throw new Error(ERROR_MESSAGE.errorText);
    }
    const uniqueNumbers = new Set(numbers);
    if (
      uniqueNumbers.size !== numbers.length ||
      numbers.some((num) => num < LOTTO_NUMBER.inRangeFrom || num > LOTTO_NUMBER.inRangeTo)
    ) {
      throw new Error(ERROR_MESSAGE.errorText);
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
