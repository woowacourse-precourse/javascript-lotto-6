import { ERROR_MESSAGES } from './constant/Constants.js';
import { checkLottoNumbers } from './util/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.lottoLength);
    }
  }

  #checkNumber(input) {
    checkLottoNumbers(input);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
