import { LOTTO } from '../data.js';
import { ERROR } from '../messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.COUNT_OF_NUMBERS) {
      throw new Error(ERROR.LOTTO.COUNT);
    }

    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(ERROR.LOTTO.NOT_INTEGER);
    }

    if (new Set(numbers).size !== LOTTO.COUNT_OF_NUMBERS) {
      throw new Error(ERROR.LOTTO.DUPLICATED);
    }

    if (
      numbers.some(
        (number) => number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER
      )
    ) {
      throw new Error(ERROR.LOTTO.OUT_OF_RANGE);
    }
  }
}

export default Lotto;
