import { AlertError } from './utils/AlertError.js';
import { MESSAGE, ERROR, LOTTERY } from './constants.js';
export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (new Set(numbers).size !== LOTTERY.NUM_COUNT) {
      throw new AlertError(ERROR.NOT_SIX_NUMBERS);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getWinningNumbersMatchCount(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  getWinningPlace(winningNumbers, bonusNumber) {
    const matchCnt = this.getWinningNumbersMatchCount(winningNumbers);
    const hasBonus = this.hasBonusNumber(bonusNumber);

    if (matchCnt === LOTTERY.FIFTH_CNT) return LOTTERY.FIFTH_PLACE;
    if (matchCnt === LOTTERY.FOURTH_CNT) return LOTTERY.FOURTH_PLACE;
    if (matchCnt === LOTTERY.SECOND_CNT && hasBonus) return LOTTERY.SECOND_PLACE;
    if (matchCnt === LOTTERY.THIRD_CNT) return LOTTERY.THIRD_PLACE;
    if (matchCnt === LOTTERY.FIRST_CNT) return LOTTERY.FIRST_PLACE;
    return LOTTERY.DEFAULT_PLACE;
  }
}
