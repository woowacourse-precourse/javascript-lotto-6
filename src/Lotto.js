import { ERROR_MESSAGES } from './constants/messages.js';
import InputValidator from './model/InputValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersSet = new Set(numbers);

    InputValidator.errorCondition(numbersSet.size !== 6, ERROR_MESSAGES.nonDuplicateNumber);
    InputValidator.errorCondition(numbers.length !== 6, ERROR_MESSAGES.nonDuplicateNumber);
    InputValidator.errorCondition(
      numbers.some(number => typeof number !== 'number'),
      ERROR_MESSAGES.invalidNumber
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
