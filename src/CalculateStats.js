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
    const updatedStats = { ...stats };

    if (matchingNumbersCount === 6) {
      updatedStats[6] += 1;
    }
    if (matchingNumbersCount === 5 && bonusMatch) {
      updatedStats['5b'] += 1;
    }
    if (matchingNumbersCount === 5) {
      updatedStats[5] += 1;
    }
    if (matchingNumbersCount === 4) {
      updatedStats[4] += 1;
    }
    if (matchingNumbersCount === 3) {
      updatedStats[3] += 1;
    }

    return updatedStats;
  }

  calculateEarningsRate(purchaseAmount) {
    const totalPrize = this.calculateTotalPrize(this.stats);
    const totalSpent = purchaseAmount;
    const earningsRate = `${((totalPrize / totalSpent) * 100).toFixed(1)}%`;
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
