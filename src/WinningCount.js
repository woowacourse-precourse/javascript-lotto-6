class WinningCount {
  #winningNumbers;

  #bonusNumber;

  #winningRate;

  constructor(winningNumbers, bonusNumber, lottos) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#winningRate = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.#setWinningRate(lottos);
  }

  #setWinningRate(lottos) {
    lottos.forEach(lotto => {
      const winningCount = this.#compareWinningNumbers(lotto);
      const lottoNumbers = lotto.getNumbers();
      this.#setWinningCount(winningCount, lottoNumbers);
    });
  }

  #setWinningCount(winningCount, lottoNumbers) {
    switch (winningCount) {
      case 6:
        this.#winningRate.first += 1;
        break;
      case 5:
        if (lottoNumbers.includes(this.#bonusNumber)) {
          this.#winningRate.second += 1;
          break;
        }
        this.#winningRate.third += 1;
        break;
      case 4:
        this.#winningRate.fourth += 1;
        break;
      case 3:
        this.#winningRate.fifth += 1;
        break;
      default:
    }
  }

  #compareWinningNumbers(lotto) {
    const numbers = lotto.getNumbers();
    const winningCount = numbers.reduce(
      (acc, number) => (this.#winningNumbers.includes(number) ? acc + 1 : acc),
      0
    );
    return winningCount;
  }

  getWinningRate() {
    return this.#winningRate;
  }
}

export default WinningCount;
