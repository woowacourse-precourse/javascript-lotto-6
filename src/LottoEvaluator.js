class LottoEvaluator {
  constructor(lottoList, winningNumber, bonusNumber) {
    this.lottoList = lottoList;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.prizeMoney = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };
  }

  evaluateLotto() {
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      earnings: 0,
    };
    this.lottoList.forEach((lotto) => this.evaluateSingleLotto(lotto, result));
    return result;
  }

  evaluateSingleLotto(lotto, result) {
    const compareLotto = this.getCompareLotto(lotto);
    this.updateResult(result, compareLotto);
  }

  getCompareLotto(lotto) {
    const matchCount = lotto.filter((number) =>
      this.winningNumber.includes(number)
    ).length;
    const hasBonus = lotto.includes(this.bonusNumber);
    return { matchCount, hasBonus };
  }

  updateResult(result, compareLotto) {
    switch (compareLotto.matchCount) {
      case 6:
        this.addWinning(result, 'first');
        break;
      case 5:
        this.addWinning(result, compareLotto.hasBonus ? 'second' : 'third');
        break;
      case 4:
        this.addWinning(result, 'fourth');
        break;
      case 3:
        this.addWinning(result, 'fifth');
        break;
    }
  }

  addWinning(result, rank) {
    result[rank] += 1;
    result.earnings += this.prizeMoney[rank];
  }
}

export { LottoEvaluator };
