import { hasDuplicate } from './util.js';

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

    if (hasDuplicate(numbers)) {
      throw new Error(['[ERROR] 로또 번호는 중복될 수 없습니다']);
    }
  }

  getNumber() {
    return this.#numbers;
  }

  findMatchingNumbers(winningNumbers, bonusNumber) {
    const totalWinningNumbers = winningNumbers.concat(bonusNumber);
    return this.#numbers.filter(num => totalWinningNumbers.includes(num));
  }
}

export default Lotto;
