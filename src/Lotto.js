import { LOTTO_NUMBERS } from './constant/Constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {}

  getMatchingCounts(opponentLotto) {
    return 2 * LOTTO_NUMBERS.count - new Set([...this.#numbers, ...opponentLotto.#numbers]).size;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
