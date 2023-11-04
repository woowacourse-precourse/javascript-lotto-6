import { LOTTO_ERROR_MESSAGE } from './constants/errorMessage';
import Validate from './Validate';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  static #validate(numbers) {
    Validate.isSixNumbers(numbers, LOTTO_ERROR_MESSAGE.sixNumber);
    Validate.isDuplicate(numbers, LOTTO_ERROR_MESSAGE.duplicate);
    Validate.isInteger(numbers, LOTTO_ERROR_MESSAGE.integer);
    Validate.isInRange(numbers, LOTTO_ERROR_MESSAGE.inRange);
  }
}

export default Lotto;
