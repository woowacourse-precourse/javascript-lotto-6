import checkNumbersRange from './utils/checkNumbersRange.js';
import isDuplicateNumbers from './utils/isDuplicateNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.sortASCNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    } else if (!checkNumbersRange(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.');
    } else if (isDuplicateNumbers(numbers)) {
      throw new Error(
        '[ERROR] 로또 번호는 중복되지 않는 숫자로 이뤄져야 합니다.'
      );
    }
  }

  get numbers() {
    return this.#numbers;
  }

  sortASCNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  matchNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  getRanking(winningNumbers, bonusNumber) {
    if (this.matchNumbers(winningNumbers) === 6) {
      return 1;
    } else if (
      this.matchNumbers(winningNumbers) === 5 &&
      this.#numbers.includes(bonusNumber)
    ) {
      return 2;
    } else if (this.matchNumbers(winningNumbers) === 5) {
      return 3;
    } else if (this.matchNumbers(winningNumbers) === 4) {
      return 4;
    } else if (this.matchNumbers(winningNumbers) === 3) {
      return 5;
    }
  }
}

export default Lotto;
