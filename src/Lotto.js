import { Console } from '@woowacourse/mission-utils';
import Validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    try {
      Validator.validateLottoLength(numbers);
      Validator.validateLottoDuplicate(numbers);
    } catch (error) {
      throw new Error(error);
    }
  }

  sortAscending() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
