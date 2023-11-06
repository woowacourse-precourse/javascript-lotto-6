import { InputError } from './utils/error.js';
import { ERROR, LOTTERY } from './constants.js';
export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (new Set(numbers).size !== LOTTERY.NUM_COUNT) {
      throw new InputError(ERROR.NOT_SIX_NUMBERS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getWinningNumbersMatchCount(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }
}
