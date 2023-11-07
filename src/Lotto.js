import { ERROR_MESSAGE } from './constants/messages.js';
import InputValidator from './utils/InputValidator.js';
import ValidationError from './utils/ValidationError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!InputValidator.checkMatchLength(numbers.length)) {
      throw new ValidationError(ERROR_MESSAGE.notMatchedLength).toString();
    }
    if (!InputValidator.checkDuplicateNumber(numbers)) {
      throw new ValidationError(ERROR_MESSAGE.duplicateNumber).toString();
    }
    if (!InputValidator.checkIncludeNumbers(numbers)) {
      throw new ValidationError(ERROR_MESSAGE.invalidNumber).toString();
    }
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
