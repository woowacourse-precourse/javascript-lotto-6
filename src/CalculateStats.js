class CalculateStats {
  constructor() {
    this.stats = {
      3: 0,
      4: 0,
      5: 0,
      '5b': 0,
      6: 0,
    };
  }

  countMatchingNumbers(ticket, winningNumbers) {
    return ticket.filter((number) => winningNumbers.includes(number)).length;
  }

  checkBonusMatch(ticket, bonusNumber) {
    return ticket.includes(bonusNumber);
  }

  updateStats(stats, matchingNumbersCount, bonusMatch) {
    const key = matchingNumbersCount === 5 && bonusMatch ? '5b' : matchingNumbersCount;
    return { ...stats, [key]: (stats[key] || 0) + 1 };
  }

  calculateEarningsRate(purchaseAmount) {
    const totalPrize = this.calculateTotalPrize(this.stats);
    const earningsRate = `${((totalPrize / purchaseAmount) * 100).toFixed(1)}%`;
    return earningsRate;
  }

  calculateTotalPrize(stats) {
    const prize3 = stats[3] * 5000;
    const prize4 = stats[4] * 50000;
    const prize5 = stats[5] * 1500000;
    const prize5b = stats['5b'] * 30000000;
    const prize6 = stats[6] * 2000000000;
    return prize3 + prize4 + prize5 + prize5b + prize6;
  }
}

export default CalculateStats;
