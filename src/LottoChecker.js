import prize from './constants/prize';

class LottoChecker {
  constructor(tickets, winningNumbers, bonusNumber) {
    this.tickets = tickets;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.revenue = 0;
  }

  #countMatchingNumbers(ticket) {
    let matchCount = 0;
    ticket.forEach(number => {
      if (this.winningNumbers.includes(number)) {
        matchCount += 1;
      }
    });
    return matchCount;
  }

  #hasBonusNumber(ticket) {
    return ticket.includes(this.bonusNumber);
  }

  #getRevenue(results) {
    let totalAmount = 0;
    for (const [matchCount, count] of Object.entries(results)) {
      if (matchCount >= 3) {
        const amount = prize[matchCount]
          ? parseInt(prize[matchCount].replace(/,/g, ''), 10)
          : 0;
        totalAmount += amount * count;
      }
    }

    this.revenue = totalAmount;
  }

  getMatches() {
    const results = {};

    this.tickets.forEach(ticket => {
      const matchCount = this.#countMatchingNumbers(ticket);
      let matchKey = matchCount.toString();

      if (matchCount === 5) {
        matchKey += this.#hasBonusNumber(ticket) ? '+bonus' : '';
      }

      results[matchKey] = (results[matchKey] || 0) + 1;
    });
    this.#getRevenue(results);
    return results;
  }
}

export default LottoChecker;
