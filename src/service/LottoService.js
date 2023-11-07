class LottoService {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getCountIncludesWinningNumbers(numbers) {
    return numbers.filter((number) => this.#winningNumbers.includes(String(number)));
  }

  hasBonusNumber(numbers) {
    return numbers.find((number) => this.#bonusNumber === String(number));
  }
}

export default LottoService;
