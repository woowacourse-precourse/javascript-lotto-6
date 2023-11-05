import { Place } from '../utils/Place.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkNumber(numbers);
    this.#numbers = [...numbers];
    this.winningCount = 0;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #checkNumber(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 1 || numbers[i] > 45 || !Number.isInteger(numbers[i])) {
        throw new Error('[ERROR] 자연수');
      }
    }
  }

  compareNumbers(winningNumbers, bonusNumber) {
    const convertedWinningNumbers = winningNumbers.map((num) =>
      parseInt(num, 10)
    );
    this.winningCount = convertedWinningNumbers.filter((number) =>
      this.#numbers.includes(number)
    ).length;
    this.addCountPlace(bonusNumber);
  }

  addCountPlace(bonusNumber) {
    if (this.winningCount === 3) Place['5th'] += 1;
    if (this.winningCount === 4) Place['4th'] += 1;
    if (this.winningCount === 5) Place['3rd'] += 1;
    if (this.winningCount === 5 && this.checkBonusNumber(bonusNumber)) {
      Place['2nd'] += 1;
    }
    if (this.winningCount === 6) Place['1st'] += 1;
  }

  checkBonusNumber(bonusNumber) {
    if (this.#numbers.some((number) => number === parseInt(bonusNumber, 10))) {
      return true;
    }
    return false;
  }
}

export default Lotto;
