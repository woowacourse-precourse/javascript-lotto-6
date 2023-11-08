import { Random } from '@woowacourse/mission-utils';
import Validator from './utils/vaildators';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.isSixNumbers(numbers);
    Validator.hasDuplicateNumbers(numbers);
  }

  getLotto() {
    return [...this.#numbers];
  }

  compareWinningNumbers(winningNumbers) {
    let matchingCount = 0;

    for (const number of winningNumbers) {
      const isMaching = this.#numbers.includes(number);

      if (isMaching) matchingCount += 1;
    }

    return matchingCount;
  }

  compareBounsNumber(bounsNumber) {
    return this.#numbers.includes(bounsNumber);
  }

  static generateLottoNumbers() {
    const uniqueNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    uniqueNumbers.sort((a, b) => a - b);
    return uniqueNumbers;
  }
}

export default Lotto;
