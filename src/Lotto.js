import { lottoErrorMessage } from './constants/errorMessage';
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
    Validate.isSixNumbers(numbers, lottoErrorMessage.sixNumber);
    Validate.isDuplicate(numbers, lottoErrorMessage.duplicate);
    Validate.isInteger(numbers, lottoErrorMessage.integer);
    Validate.isInRange(numbers, lottoErrorMessage.inRange);
  }
}

export default Lotto;
