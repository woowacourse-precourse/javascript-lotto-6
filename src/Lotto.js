import Validation from './model/Validation';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validation = new Validation(numbers);
    Validation.validateLottoLength(numbers);
    validation.validateLotto();
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
