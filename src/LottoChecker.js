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

  getResult() {
    const result = {};

    this.tickets.forEach(ticket => {
      const matchCount = this.#countMatchingNumbers(ticket);
      let matchKey = matchCount.toString();

      if (matchCount === 5) {
        matchKey += this.#hasBonusNumber(ticket) ? '+bonus' : '';
      }

      result[matchKey] = (result[matchKey] || 0) + 1;
    });

    return result;
  }
}

export default LottoChecker;
