import { BONUS_NUMBER_TYPE, WINNING_CONDITIONS_AND_PRIZES } from '../../constants.js';

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

  isWin() {
    return WINNING_CONDITIONS_AND_PRIZES.some(({ condition }) =>
      this.compareResultWithCondition(condition),
    );
  }

  compareResultWithCondition(condition) {
    return (
      condition.winningNumbersCount === this.#countOfWinningNumbers &&
      condition.bonusNumberType === this.getBonusNumberType()
    );
  }

  get() {
    if (this.isWin())
      return {
        countOfWinningNumbers: this.#countOfWinningNumbers,
        bonusNumberType: this.getBonusNumberType(),
      };
  }
}
