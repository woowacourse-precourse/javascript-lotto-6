import Validator from '../validators/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  getUserLotto() {
    return this.#numbers;
  }
}

export default Lotto;
