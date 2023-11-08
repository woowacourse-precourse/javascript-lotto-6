import { PRIZE } from './constants/Setting.js';

class Matcher {
  #prizeTable = new Map(PRIZE);

  #matchStatusCount = new Map([
    [5000, 0],
    [50000, 0],
    [1500000, 0],
    [30000000, 0],
    [2000000000, 0],
  ]);

  constructor(tickets, winningNumbers, bonusNumber) {
    this.#match(tickets, winningNumbers, bonusNumber);
  }

  #match(tickets, winningNumbers, bonusNumber) {
    tickets.map((ticket) => {
      const matchedNumberCount = ticket.filter((number) => winningNumbers.includes(number)).length;
      const isBonusMatch = ticket.includes(bonusNumber);
      const keyOfPrizeTable =
        isBonusMatch && matchedNumberCount === 5 ? '5+bonus' : matchedNumberCount;
      if (this.#prizeTable.has(keyOfPrizeTable)) {
        const prize = this.#prizeTable.get(keyOfPrizeTable);
        this.#matchStatusCount.set(prize, this.#matchStatusCount.get(prize) + 1);
      }
    });
  }

  get matchStatus() {
    return this.#matchStatusCount;
  }
}

export default Matcher;
