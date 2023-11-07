import { PRIZE } from '../constants/prize.js';
import Validator from '../utils/validator.js';

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
    return this.#numbers;
  }

  getPrize(winningLotteryNumbers, bonusNumber) {
    const [matchCount, matchBonus] = this.#matchLottery(winningLotteryNumbers, bonusNumber);
    switch (matchCount) {
      case 3:
        return PRIZE.fifth;
      case 4:
        return PRIZE.fourth;
      case 5:
        return matchBonus ? PRIZE.second : PRIZE.third;
      case 6:
        return PRIZE.first;
      default:
        return PRIZE.out;
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
