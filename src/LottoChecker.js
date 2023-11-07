class LottoChecker {
  constructor(tickets, winningNumbers, bonusNumber) {
    this.tickets = tickets;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
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
    console.log(results);
    return results;
  }
}

export default LottoChecker;
