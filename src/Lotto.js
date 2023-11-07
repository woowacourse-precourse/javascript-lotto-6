import Validation from './Validation.js';
import { ERROR_MESSAGE } from './constants/message.js';
import { LOTTO_DIGIT } from './constants/gameinfo.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_DIGIT) {
      throw new Error(ERROR_MESSAGE.lotto_length);
    }

    if (Validation.hasDuplication(numbers)) {
      throw new Error(ERROR_MESSAGE.lotto_duplicate);
    }

    if (!Validation.hasProperRange(numbers)) {
      throw new Error(ERROR_MESSAGE.lotto_range);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
