class LottoChecker {
  constructor(tickets, winningNumbers) {
    this.tickets = tickets;
    this.winningNumbers = winningNumbers;
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

  getResult() {
    const result = {};

    this.tickets.forEach(ticket => {
      const matchCount = this.#countMatchingNumbers(ticket);

      if (result[matchCount]) {
        result[matchCount] += 1;
      } else {
        result[matchCount] = 1;
      }
    });

    return result;
  }
}

export default LottoChecker;
