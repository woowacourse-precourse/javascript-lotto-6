import { MESSAGES, NUMBER_BOUNDS } from './constants/constants.js';

class Lotto {
  /**
   * @type number[]
   */
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_BOUNDS.COUNT) {
      throw new Error(MESSAGES.ERROR.COUNTS_OF_LOTTO_NUMBER_EXCEPTION);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(MESSAGES.ERROR.LOTTO_NUMBER_DUPLICATION_EXCEPTION);
    }

    if (!numbers.every((number) => number >= NUMBER_BOUNDS.MIN && number <= NUMBER_BOUNDS.MAX)) {
      throw new Error(MESSAGES.ERROR.LOTTO_NUMBER_OUT_OF_BOUNDS_EXCEPTION);
    }
  }

  get lotto() {
    return this.#numbers;
  }
}

export default Lotto;
