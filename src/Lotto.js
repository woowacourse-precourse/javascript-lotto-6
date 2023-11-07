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

  static getLottoWinnings(matchCnt, hasBonus) {
    const result = {
      place: LOTTERY.DEFAULT_PLACE,
      label: `${MESSAGE.MATCH_NUMBERS(matchCnt)}`,
      winnings: LOTTERY.DEFAULT_WINNINGS,
    };

    if (matchCnt === LOTTERY.FIFTH_CNT)
      return { ...result, place: LOTTERY.FIFTH_PLACE, winnings: LOTTERY.FIFTH_WINNINGS };
    if (matchCnt === LOTTERY.FOURTH_CNT)
      return { ...result, place: LOTTERY.FOURTH_PLACE, winnings: LOTTERY.FOURTH_WINNINGS };
    if (matchCnt === LOTTERY.SECOND_CNT && hasBonus === true)
      return {
        label: result.label + `, ${MESSAGE.MATCH_BONUS_NUMBER}`,
        place: LOTTERY.SECOND_PLACE,
        winnings: LOTTERY.SECOND_WINNINGS,
      };
    if (matchCnt === LOTTERY.THIRD_CNT)
      return { ...result, place: LOTTERY.THIRD_PLACE, winnings: LOTTERY.THIRD_WINNINGS };
    if (matchCnt === LOTTERY.FIRST_CNT)
      return { ...result, place: LOTTERY.FIRST_PLACE, winnings: LOTTERY.FIRST_WINNINGS };
    return result;
  }
}
