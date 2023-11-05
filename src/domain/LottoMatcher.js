class LottoMatcher {
  
  constructor(tickets, winningNumbers, bonusNumber, ticketPrice) {
    this.tickets = tickets;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.ticketPrice = ticketPrice;
  }

  countMatches() {
    const result = this.#initializeResult();

    this.tickets.forEach((ticket) => {
      this.#updateResult(result, ticket);
    });

    return result;
  }

  #initializeResult() {
    return {
      "5등": 0,
      "4등": 0,
      "3등": 0,
      "2등": 0,
      "1등": 0,
      totalSpent: parseInt(this.ticketPrice),
      totalEarnings: 0,
    };
  }

  #updateResult(result, ticket) {
    const matchedNumbers = this.#getMatchedNumbers(ticket, this.winningNumbers);
    const matchedCount = matchedNumbers.length;

    if (matchedCount === 6) {
      this.#updateFirstPrize(result);
    } else if (matchedCount === 5 && matchedNumbers.includes(this.bonusNumber)) {
      this.#updateSecondPrize(result);
    } else if (matchedCount === 5) {
      this.#updateThirdPrize(result);
    } else if (matchedCount === 4) {
      this.#updateFourthPrize(result);
    } else if (matchedCount === 3) {
      this.#updateFifthPrize(result);
    }
  }

  #getMatchedNumbers(ticket, winningNumbers) {
    return ticket.filter((number) => winningNumbers.includes(number));
  }

  #updateFirstPrize(result) {
    result["1등"]++;
    result.totalEarnings += 2000000000;
  }

  #updateSecondPrize(result) {
    result["2등"]++;
    result.totalEarnings += 30000000;
  }

  #updateThirdPrize(result) {
    result["3등"]++;
    result.totalEarnings += 1500000;
  }

  #updateFourthPrize(result) {
    result["4등"]++;
    result.totalEarnings += 50000;
  }

  #updateFifthPrize(result) {
    result["5등"]++;
    result.totalEarnings += 5000;
  }
}

export default LottoMatcher;
