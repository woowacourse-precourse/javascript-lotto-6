import checkNumbersRange from './utils/checkNumbersRange.js';
import isDuplicateNumbers from './utils/isDuplicateNumbers.js';
import { LOTTO_ERROR_MESSAGE } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.sortASCNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.length);
    } else if (!checkNumbersRange(numbers)) {
      throw new Error(LOTTO_ERROR_MESSAGE.range);
    } else if (isDuplicateNumbers(numbers)) {
      throw new Error(LOTTO_ERROR_MESSAGE.duplicate);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  sortASCNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
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

  matchNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }
}

export default Lotto;
