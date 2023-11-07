import { InputError } from './utils/error.js';
import { MESSAGE, ERROR, LOTTERY } from './constants.js';
export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (new Set(numbers).size !== LOTTERY.NUM_COUNT) {
      throw new InputError(ERROR.NOT_SIX_NUMBERS);
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

  static getLottoWinnings(matchCnt, hasBonus) {
    const result = {
      label: `${MESSAGE.MATCH_NUMBERS(matchCnt)}`,
      winnings: LOTTERY.DEFAULT_WINNINGS,
    };

    if (matchCnt === LOTTERY.FIFTH_CNT) return { ...result, winnings: LOTTERY.FIFTH_WINNINGS };
    if (matchCnt === LOTTERY.FOURTH_CNT) return { ...result, winnings: LOTTERY.FOURTH_WINNINGS };
    if (matchCnt === LOTTERY.SECOND_CNT && hasBonus === true)
      return {
        label: result.label + `, ${MESSAGE.MATCH_BONUS_NUMBER}`,
        winnings: LOTTERY.SECOND_WINNINGS,
      };
    if (matchCnt === LOTTERY.THIRD_CNT) return { ...result, winnings: LOTTERY.THIRD_WINNINGS };
    if (matchCnt === LOTTERY.FIRST_CNT) return { ...result, winnings: LOTTERY.FIRST_WINNINGS };
    return result;
  }
}
