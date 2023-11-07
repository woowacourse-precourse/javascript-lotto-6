import { LOTTO, LOTTO_NUMBER } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';

class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  countMatchingWith(winningNumbers) {
    const matchingCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;
    return matchingCount;
  }

  get() {
    return [...this.#numbers];
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.count) {
      throw new Error(ERROR.notSix);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.notUnique);
    }
    if (
      numbers.some(
        (number) => number < LOTTO_NUMBER.min || number > LOTTO_NUMBER.max,
      )
    ) {
      throw new Error(ERROR.notOneToFortyFive);
    }
  }
}

export default Lotto;
