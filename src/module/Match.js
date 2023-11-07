class Match {
  constructor(purchasedLottoArray, winningNumbers, bonus) {
    this.matchCount = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    };
    this.purchasedLottoArray = purchasedLottoArray;
    this.winningNumbers = winningNumbers;
    this.bonus = bonus;
  }

  getMatchCount() {
    this.purchasedLottoArray.forEach(lottoNumbers => {
      const matchingCount = lottoNumbers.filter(number =>
        this.winningNumbers.split(',').includes(String(number)),
      ).length;
      this.calculateMatch(matchingCount, lottoNumbers);
    });
    return this.matchCount;
  }

  calculateMatch(matchingCount, lottoNumbers) {
    if (matchingCount === 3) {
      this.matchCount.threeMatches += 1;
    } else if (matchingCount === 4) {
      this.matchCount.fourMatches += 1;
    } else if (
      matchingCount === 5 &&
      lottoNumbers.includes(Number(this.bonus))
    ) {
      this.matchCount.fiveBonusMatches += 1;
    } else if (matchingCount === 5) {
      this.matchCount.fiveMatches += 1;
    } else if (matchingCount === 6) {
      this.matchCount.sixMatches += 1;
    }
  }
}

export default Match;
