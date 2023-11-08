import { ERROR_MESSAGE } from './Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some(number => isNaN(number))) {
      throw new Error(ERROR_MESSAGE.typeError);
    }
    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGE.rangeError);
    }
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoLengthError);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicationError);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
