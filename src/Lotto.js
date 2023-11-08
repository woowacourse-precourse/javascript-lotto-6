import { PRIZE_STATUS } from './constants/prize.js';
import Validator from './utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLotteryNumbers(numbers);
  }

  getLottoNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getPrize(winningLotteryNumbers, bonusNumber) {
    const [matchCount, matchBonus] = this.#matchLottery(winningLotteryNumbers, bonusNumber);
    switch (matchCount) {
      case 3:
        return PRIZE_STATUS.fifth;
      case 4:
        return PRIZE_STATUS.fourth;
      case 5:
        return matchBonus ? PRIZE_STATUS.second : PRIZE_STATUS.third;
      case 6:
        return PRIZE_STATUS.first;
      default:
        return PRIZE_STATUS.out;
    }
  }

  #matchLottery(winningLotteryNumbers, bonusNumber) {
    const initialCount = 0;
    const matchCount = this.#numbers.reduce(
      (count, number) => (winningLotteryNumbers.includes(number) ? count + 1 : count),
      initialCount,
    );
    const matchBonus = this.#numbers.includes(bonusNumber);
    return [matchCount, matchBonus];
  }
}

export default Lotto;
