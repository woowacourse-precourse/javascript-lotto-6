import { MissionUtils } from '@woowacourse/mission-utils';
import { SIX, START_INCLUSIVE, END_INCLUSIVE } from './constants/numbers.js';
import { ERROR } from './constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    if (!numbers) {
      numbers = this.#pickNumbers();
    }

    this.#validate(numbers);
    this.#numbers = numbers.map(number => Number(number));
  }

  #validate(numbers) {
    if (numbers.length !== SIX) {
      throw new Error(ERROR.not_a_valid_count);
    }

    const uniqueNumbers = [...new Set(numbers)];
    if (numbers.length !== uniqueNumbers.length) {
      throw new Error(ERROR.not_duplicate_numbers);
    }

    numbers.forEach(number => {
      if (!Number(number) || !Number.isInteger(Number(number)) || Number(number) < START_INCLUSIVE || Number(number) > END_INCLUSIVE) {
        throw new Error(ERROR.not_a_valid_number);
      }
    });
  }

  #pickNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(START_INCLUSIVE, END_INCLUSIVE, SIX);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
