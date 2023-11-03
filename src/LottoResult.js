const PRIZE_CATEGORIES = {
  FIRST: "6",
  SECOND: "5+1",
  THIRD: "5",
  FOURTH: "4",
  FIFTH: "3",
  NONE: "꽝",
};

class LottoResult {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  calculateResults(lottos) {
    return lottos.map((lotto) => {
      const matchInfo = this.getMatchInfo(lotto);
      return this.getPrizeCategory(matchInfo.matchCount, matchInfo.bonusMatch);
    });
  }

  getMatchInfo(lotto) {
    const matchCount = lotto
      .getNumbers()
      .filter((number) => this.winningNumbers.includes(number)).length;
    const bonusMatch = lotto.getNumbers().includes(this.bonusNumber);
    return { matchCount, bonusMatch };
  }

  getPrizeCategory(matchCount, bonusMatch) {
    if (matchCount === 6) return PRIZE_CATEGORIES.FIRST;
    if (matchCount === 5 && bonusMatch) return PRIZE_CATEGORIES.SECOND;
    if (matchCount === 5) return PRIZE_CATEGORIES.THIRD;
    if (matchCount === 4) return PRIZE_CATEGORIES.FOURTH;
    if (matchCount === 3) return PRIZE_CATEGORIES.FIFTH;
    return PRIZE_CATEGORIES.NONE;
  }
}

export default LottoResult;
