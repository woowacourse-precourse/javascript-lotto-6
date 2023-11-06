import { Place } from '../utils/Statistics.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#checkNumber(numbers);
    this.#checkSameNumber(numbers);
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
        throw new Error('[ERROR] 로또 번호는 자연수 1~45 값이어야 합니다.');
      }
    }
  }

  #checkSameNumber(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호가 중복됩니다.');
    }
  }

  compareNumbers(winningNumbers, bonusNumber) {
    const convertedWinningNumbers = winningNumbers.map((num) =>
      parseInt(num, 10)
    ); // 사용자 입력 문자배열 -> 숫자형태로 변환
    this.winningCount = convertedWinningNumbers.filter((number) =>
      this.#numbers.includes(number)
    ).length; // 번호 일치 개수
    this.calculateRank(bonusNumber);
  }

  calculateRank(bonusNumber) {
    if (this.winningCount === 3) Place['5th'] += 1;
    if (this.winningCount === 4) Place['4th'] += 1;
    if (this.winningCount === 5) Place['3rd'] += 1;
    if (this.winningCount === 5 && this.existBonusNumber(bonusNumber)) {
      Place['2nd'] += 1;
    }
    if (this.winningCount === 6) Place['1st'] += 1;
  }

  existBonusNumber(bonusNumber) {
    if (this.#numbers.includes(parseInt(bonusNumber, 10))) {
      return true;
    }
    return false;
  }
}

export default Lotto;
