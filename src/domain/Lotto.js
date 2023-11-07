import LottoValidator from '../validator/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    this.#numbers = this.#sorted(numbers);
  }

  #sorted(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
