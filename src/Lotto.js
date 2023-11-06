import { validateLotto } from './utils/validate.js';
import { MATCHING_COUNT } from './constants/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchingCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  getRank(winningNumbers, bonusNumber) {
    const matchingCount = this.getMatchingCount(winningNumbers);
    const hasBonusNumber = this.#numbers.includes(bonusNumber);

    if (matchingCount === MATCHING_COUNT.first) return 1;
    if (matchingCount === MATCHING_COUNT.second && hasBonusNumber) return 2;
    if (matchingCount === MATCHING_COUNT.third) return 3;
    if (matchingCount === MATCHING_COUNT.fourth) return 4;
    if (matchingCount === MATCHING_COUNT.fifth) return 5;

    return 0;
  }
}

export default Lotto;
