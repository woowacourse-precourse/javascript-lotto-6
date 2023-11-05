import Validator from './validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    Validator.length(numbers);
    Validator.range(numbers);
    Validator.duplication(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  #sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
