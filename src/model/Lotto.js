import LottoValidator from '../validator/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#makeArray(numbers);
    this.#numbers = this.#sortNumbers(this.#numbers);
    LottoValidator.validator(this.#numbers);
  }

  #makeArray(numbers) {
    return numbers.split(',').map(number => Number(number));
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
