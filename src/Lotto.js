import { LOTTO } from './constants/lotto.js';
import { ERROR_MESSAGE } from './constants/message.js';
import { utils } from './utils/utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = utils.ascendingNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.lottoLength);
    }

    if (new Set(numbers).size !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.existDuplicateNumber);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
