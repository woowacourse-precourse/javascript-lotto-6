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

  getCountOfBonusNumber() {
    return this.#countOfBonusNumber();
  }

  #setCountOfWinningNumbers() {
    this.#countOfWinningNumbers = this.#numbers.filter((number) =>
      this.#winningNumbers.includes(number),
    ).length;
  }

  #countOfBonusNumber() {
    if (this.#countOfWinningNumbers === 5) {
      if (this.#numbers.some((number) => number === this.#bonusNumber)) {
        return 2;
      }
      return 1;
    }
    return 0;
  }

  isWin(condition, countOfWinningNumbers, countOfBonusNumber) {
    const { winningCount, bonusCount } = condition;
    return winningCount === countOfWinningNumbers && bonusCount === countOfBonusNumber;
  }
}
