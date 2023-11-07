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
}

export default CalculateStats;
