import { MissionUtils } from '@woowacourse/mission-utils';
import { SIX, START_INCLUSIVE, END_INCLUSIVE } from './constants/data.js';
import { ERROR } from './constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    if (!numbers) {
      numbers = this.#pickNumbers();
    }
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== SIX) {
      throw new Error(ERROR.not_a_valid_count);
    }

    const uniqueNumbers = [...new Set(numbers)];
    if (numbers.length !== uniqueNumbers.length) {
      throw new Error(ERROR.not_duplicate_numbers);
    }
  }
  
  getNumbers() {
    return this.#numbers;
  }

  #pickNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(START_INCLUSIVE, END_INCLUSIVE, SIX);
  }
}

export default Lotto;
