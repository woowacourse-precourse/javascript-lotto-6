import { LOTTO } from './constant/LottoInfo.js';
import { ERROR } from './constant/LottoMessage.js';

class Lotto {
  #numbers = [];

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  countMatchingWith(otherLotto) {
    const matchingCount = this.#numbers.filter((number) =>
      otherLotto.includes(number),
    ).length;

    return matchingCount;
  }

  get() {
    return [...this.#numbers];
  }

  static #validate(numbers) {
    if (numbers.length !== LOTTO.count) {
      throw new Error(ERROR.count);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.unique);
    }

    const { min, max } = LOTTO.number;
    if (!numbers.every((number) => min <= number && number <= max)) {
      throw new Error(ERROR.between);
    }
  }
}

export default Lotto;
