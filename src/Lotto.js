import { ERROR_MESSAGE, LOTTO } from './utils/constants.js';
import { throwError } from './utils/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#isLengthSix(numbers);
    this.#isDuplicate(numbers);
    this.#isRange(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #isDuplicate(numbers) {
    throwError(
      ERROR_MESSAGE.numbers_duplicate,
      new Set(numbers).size !== numbers.length,
    );
  }

  #isRange(numbers) {
    throwError(
      ERROR_MESSAGE.numbers_range,
      numbers.some(
        (number) => number < LOTTO.min_number || number > LOTTO.max_number,
      ),
    );
  }

  #isLengthSix(value) {
    throwError(ERROR_MESSAGE.numbers_length, value.length !== LOTTO.length);
  }
}

export default Lotto;
