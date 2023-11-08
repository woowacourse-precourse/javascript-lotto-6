import { ERROR } from './message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.array.quantityMismatch);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.array.duplicate);
    }
  }
}
export default Lotto;
