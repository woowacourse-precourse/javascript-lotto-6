// import { ERROR } from './constants.js';
// import { NUMBER } from './constants.js';
import validate from './domains/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validate.lotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
