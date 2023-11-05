import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';
import CustomError from './errors/CustomError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.size) {
      throw new CustomError(ERROR.lotto.invalidSize);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
