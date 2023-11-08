import InputValidator from './Validator/InputValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    InputValidator.isLottoNumbersInRange(numbers);
    InputValidator.isLottoNumbersInLength(numbers);
    InputValidator.isLottoNumbersUnique(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
