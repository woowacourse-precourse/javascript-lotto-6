import validateLottoNumbers from '../validations/validateLottoNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLottoNumbers(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
