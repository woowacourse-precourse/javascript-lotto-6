class ResultAnalyzer {
  #winningNumber;

  #bonusNumber;

  #ticketList;

  #result;

  #prize;

  constructor(winningNumber, bonusNumber, ticketList) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#ticketList = ticketList;
    this.#prize = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
    };
  }

  getResult() {
    this.findResult();
  }

  findResult() {
    this.#ticketList.forEach((ticket) => {
      this.countCorrect(ticket);
    });
  }

  countCorrect(ticket) {
    let count = 0;
    ticket.forEach((number) => {
      if (this.winningNumber.includes(number)) {
        count += 1;
      }
    });
    if (count === 5 && ticket.includes(this.#bonusNumber)) {
      this.#prize.bonus += 1;
    }
    if (count > 2) {
      this.#prize.count += 1;
    }
  }
}

export default ResultAnalyzer;
