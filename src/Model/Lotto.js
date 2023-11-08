import InputValidator from '../utils/InputValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    InputValidator.validateLottoWinningNumber(numbers);
  }

  getLottoNumbers() {
    return this.#numbers.sort((num1, num2) => num1 - num2);
  }
}

export default Lotto;
