import { ERROR, LOTTO } from './constant/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.LENGTH);
    }

    const isInvalidRange = numbers.some(
      number => number < LOTTO.NUMBERS.MIN || number > LOTTO.NUMBERS.MAX
    );
    if (isInvalidRange) {
      throw new Error(ERROR.LOTTO_NUMBERS.RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.UNIQE);
    }
  }
}

export default Lotto;
