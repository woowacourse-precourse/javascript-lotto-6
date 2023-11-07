import Validation from './Validation';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.isLottoNumbersValidated(numbers);
  }

  getLottoNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
