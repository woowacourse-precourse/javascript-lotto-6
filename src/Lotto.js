import { validateWinnigNumber } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateWinnigNumber(numbers);
  }
}

export default Lotto;
