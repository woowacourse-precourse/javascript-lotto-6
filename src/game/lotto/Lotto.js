import { Validator } from '../../validation/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    Validator.Lotto.validate(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
