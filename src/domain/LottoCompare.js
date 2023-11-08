class LottoCompare {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getCountIncludesWinningNumbers(numbers) {
    return numbers.filter((number) => this.#winningNumbers.includes(String(number))).length;
  }

  hasBonusNumber(numbers) {
    return numbers.includes(this.#bonusNumber);
  }
}

export default LottoCompare;
