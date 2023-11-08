import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER_RANGE } from './utils';

class UniqueRandomNumbers {
  #uniqueRandomNumbers;

  constructor(amount) {
    this.#uniqueRandomNumbers = this.#generateUniqueRandomNumbers(amount);
  }

  #generateUniqueRandomNumbers(amount) {
    const numbers = new Set();

    while (numbers.size < amount) {
      const number = MissionUtils.Random.pickNumberInRange(
        LOTTO_NUMBER_RANGE.MIN,
        LOTTO_NUMBER_RANGE.MAX
      );
      numbers.add(number);
    }

    return [...numbers].sort((a, b) => a - b);
  }

  get() {
    return this.#uniqueRandomNumbers;
  }
}

export default UniqueRandomNumbers;
