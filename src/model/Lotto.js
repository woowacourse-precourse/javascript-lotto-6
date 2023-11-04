import Validator from '../validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers.map((number) => Number(number)));
  }

  #validate(numbers) {
    Validator.validateLotto(numbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((first, second) => first - second);
  }

  getNumberString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
