import ErrorMessages from './ErrorMessages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessages.OUTSIDE_SET_NUMBER);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ErrorMessages.DUPLICATE_NUMBER);
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error(ErrorMessages.NUMBER_OUT_OF_RANGE);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}
export default Lotto;
