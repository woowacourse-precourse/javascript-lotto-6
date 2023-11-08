import { matchArrays } from './utils/arrayUtils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumberList() {
    return this.#numbers;
  }

  getString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  matchLotto(winningNumbers, bonusNumber) {
    const matchCount = matchArrays(this.#numbers, winningNumbers).length;
    const isMatchBonus = this.#numbers.includes(bonusNumber);

    return [matchCount, isMatchBonus];
  }
}

export default Lotto;
