import { PRIZE } from './constant.js';

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

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  getIntersection(winningLotteryNumbers) {
    return winningLotteryNumbers.filter((number) => this.#numbers.includes(number)).length;
  }

  compareNumbersOf(winningLotteryNumbers, bonusNumber) {
    const intersection = this.getIntersection(winningLotteryNumbers);

    switch (intersection) {
      case 3:
        return PRIZE.FIFTH;
      case 4:
        return PRIZE.FOURTH;
      case 5:
        return this.#numbers.includes(bonusNumber) ? PRIZE.SECOND : PRIZE.THIRD;
      case 6:
        return PRIZE.FIRST;
      default:
        return null;
    }
  }
}

export default Lotto;
