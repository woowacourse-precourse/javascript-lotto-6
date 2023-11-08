import validation from './validation/validation.js';
import { ERROR_MSG } from './constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (!validation.isLengthSix(numbers))
      throw new Error(ERROR_MSG.INVALID_LOTTO);
    if (!validation.isInRange(numbers))
      throw new Error(ERROR_MSG.INVALID_LOTTO);
    if (validation.isDuplicated(numbers))
      throw new Error(ERROR_MSG.INVALID_LOTTO);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
