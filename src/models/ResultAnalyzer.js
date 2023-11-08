class ResultAnalyzer {
  #winningNumber;

  #bonusNumber;

  #ticketList;

  #result;

  #prize;

  #profit;

  #reward;

  constructor(winningNumber, bonusNumber, ticketList) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#ticketList = ticketList;
    this.#prize = {
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    };
    this.#reward = [5000, 50000, 1500000, 30000000, 2000000000];
    this.#profit = 0;
  }

  getResult() {
    this.findResult();
    const result = {
      prize: this.#prize,
      profit: this.#profit,
    };
    return result;
  }

  findResult() {
    this.#ticketList.forEach((ticket) => {
      this.countCorrect(ticket);
    });
    this.calculateProfit();
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

  calculateProfit() {
    const prizeNumber = Object.values(this.#prize);
    const profit = prizeNumber.map(
      (number, index) => number * this.#reward[index],
    );
    const sum = profit.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    const pay = this.#ticketList.length;
    this.#profit = (sum / pay).toFixed(1);
  }
}

export default ResultAnalyzer;
