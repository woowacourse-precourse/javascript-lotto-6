import InputError from '../utils/InputError.js';
import { ERROR_MSG } from '../constants/LottoMsg.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new InputError(ERROR_MSG.LOTTO_SHOULD_SIX);
    }
  }

  // TODO: 추가 기능 구현
  sortingNumber() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers.join(', ');
  }
}

export default Lotto;
