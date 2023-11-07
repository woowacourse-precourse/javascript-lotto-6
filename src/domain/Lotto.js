import { ERROR_MESSAGES } from '../utils/Messages.js';
import { isNumberLengthValid, isNumbersInRange } from '../utils/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateInRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isNumberLengthValid(numbers)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    }
  }

  #validateInRange(numbers){
    if (!isNumbersInRange(numbers)) {
      throw new Error(ERROR_MESSAGES.INVALID_RANGE);
    }
  }

  getLottoNumber() {
    return this.#numbers;
  }

}

export default Lotto;