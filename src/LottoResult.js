class LottoResult {
  #result;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#result = {
      '3개 일치': { prize: 5000, count: 0 },
      '4개 일치': { prize: 50000, count: 0 },
      '5개 일치': { prize: 1500000, count: 0 },
      '5개 일치, 보너스 볼 일치': { prize: 30000000, count: 0 },
      '6개 일치': { prize: 2000000000, count: 0 },
    };
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.calculateResults();
  }

  calculateResults() {
    this.lottos.forEach((lotto) => {
      const matchedNumbers = this.winningNumbers.countMatchedNumbers(lotto);
      const isBonusMatch = this.winningNumbers.isBonusNumberMatch(
        lotto,
        this.bonusNumber
      );
      this.updateResults(matchedNumbers, isBonusMatch);
    });
  }

  updateResults(matchedNumbers, isBonusMatch) {
    if (matchedNumbers === 3) {
      return this.#result['3개 일치'].count++;
    }
    if (matchedNumbers === 4) {
      return this.#result['4개 일치'].count++;
    }
    if (matchedNumbers === 5) {
      return isBonusMatch
        ? this.#result['5개 일치, 보너스 볼 일치'].count++
        : this.#result['5개 일치'].count++;
    }
    if (matchedNumbers === 6) {
      return this.#result['6개 일치'].count++;
    }
  }

  calculateTotalPrize() {
    const totalPrize = Object.keys(this.#result).reduce(
      (total, key) => total + this.#result[key].prize * this.#result[key].count,
      0
    );

    return totalPrize;
  }

  calculateProfitRate(totalSpent) {
    const totalPrize = this.calculateTotalPrize();
    return ((totalPrize / totalSpent) * 100).toFixed(1);
  }

  getResult() {
    return this.#result;
  }
}

export default LottoResult;
