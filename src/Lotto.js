import { LOTTO_NUMBERS } from './constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {}

  #sortNumbers(numbers) {
    return numbers.sort((first, second) => first - second);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getMatchingCounts(opponentLotto) {
    return 2 * LOTTO_NUMBERS.count - new Set([...this.#numbers, ...opponentLotto.#numbers]).size;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
