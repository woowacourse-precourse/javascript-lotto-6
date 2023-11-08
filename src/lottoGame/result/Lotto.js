import { BONUS_NUMBER_TYPE } from '../../constants.js';

export class LottoResult {
  #numbers;
  #winningNumbers;
  #bonusNumber;
  #countOfWinningNumbers;

  constructor(numbers, winningNumbers, bonusNumber) {
    this.#numbers = numbers;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;

    this.#setCountOfWinningNumbers();
  }

  getCountOfWinningNumbers() {
    return this.#countOfWinningNumbers;
  }

  getBonusNumberType() {
    if (this.#countOfWinningNumbers === 5) {
      if (this.#numbers.some((number) => number === this.#bonusNumber)) {
        return BONUS_NUMBER_TYPE.withFiveWinningNumbers;
      }
      return BONUS_NUMBER_TYPE.withOutFiveWinningNumbers;
    }
    return BONUS_NUMBER_TYPE.useless;
  }

  #setCountOfWinningNumbers() {
    this.#countOfWinningNumbers = this.#numbers.filter((number) =>
      this.#winningNumbers.includes(number),
    ).length;
  }

  isWin(condition) {
    const { winningCount, bonusType } = condition;
    return winningCount === this.#countOfWinningNumbers && bonusType === this.getBonusNumberType();
  }
}
