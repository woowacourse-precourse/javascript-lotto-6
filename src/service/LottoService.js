class LottoService {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #getCountIncludesWinningNumbers(numbers) {
    return numbers.filter((number) => this.#winningNumbers.includes(String(number))).length;
  }

  #hasBonusNumber(numbers) {
    return numbers.find((number) => this.#bonusNumber === String(number));
  }

  #isSecond(numbers) {
    return !!this.#hasBonusNumber(numbers);
  }

  createLottoResult(lottos) {
    return lottos.map((lotto) => ({
      includesCount: this.#getCountIncludesWinningNumbers(lotto),
      isSecond: this.#isSecond(lotto),
    }));
  }
}

export default LottoService;
