import { LOTTO_ERROR_MESSAGE } from '../constants/errorMessage';
import Validation from '../Validation';

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
    new Validation(numbers)
      .isSixNumbers(sixNumber)
      .isDuplicate(duplicate)
      .isInteger(integer)
      .isInRange(inRange);
  }
}

export default Lotto;
