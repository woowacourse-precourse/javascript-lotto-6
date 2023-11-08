import Validator from './utils/Validator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortAscending(numbers);
  }

  #validate(numbers) {
    Validator.validateLottoLength(numbers);
    Validator.validateLottoDuplicate(numbers);
  }

  #sortAscending(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
