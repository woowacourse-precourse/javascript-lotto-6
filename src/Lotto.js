import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validationNumber(numbers);
    this.#numbers = numbers;
  }

  #sortNumber(validNumbers) {
    this.#numbers = validNumbers.sort((first, second) => first - second);
    return this.#numbers;
  }

  getNumber() {
    return this.#sortNumber(this.#numbers);
  }
}

export default Lotto;
