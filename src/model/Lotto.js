import { LOTTO_ERROR_MESSAGE } from '../constants/errorMessage.js';
import Validate from '../Validate.js';

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
    const { sixNumber, duplicate, integer, inRange } = LOTTO_ERROR_MESSAGE;
    new Validate(numbers)
      .isSixNumbers(sixNumber)
      .isDuplicate(duplicate)
      .isInteger(integer)
      .isInRange(inRange);
  }
}

export default Lotto;
