import Validator from './validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }
}

export default Lotto;
