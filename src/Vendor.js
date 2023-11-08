import { keys } from './constants.js';
import {
  generateRandomNumbers,
  getEarnings,
  getScoreKey,
  calculatePercentageProfit
} from './utilities.js';

class Vendor {
  #tickets;

  constructor(amount) {
    this.#tickets = this.#createTickets(amount);
    this.purchaseAmount = amount;
  }

  #createTickets(amount) {
    const ticketCount = amount / 1000;
    const ticketsPurchased = [];

    for (let i = 0; i < ticketCount; i += 1) {
      const newTicket = generateRandomNumbers();
      ticketsPurchased.push(newTicket);
    }

    return ticketsPurchased;
  }

  #createScorekeeper() {
    const scores = {};
    const keyList = Object.values(keys);

    for (let i = 0; i < keyList.length; i += 1) {
      scores[keyList[i]] = 0;
    }

    return scores;
  }

  calculateEarnings(matches) {
    let earnings = 0;
    const keyList = Object.values(keys);
    const matchingKeys = keyList.filter((key) => matches[key] !== 0);

    for (let i = 0; i < matchingKeys.length; i += 1) {
      const amountEarned =
        getEarnings(matchingKeys[i]) * matches[matchingKeys[i]];
      earnings += amountEarned;
    }

    return earnings;
  }

  getTickets() {
    return this.#tickets;
  }

  findMatches(winningTicket, bonusNumber) {
    const numbers = winningTicket.getLottoNumbers();
    const scores = this.#createScorekeeper();

    for (let i = 0; i < this.#tickets.length; i += 1) {
      let count = 0;
      this.#tickets[i].forEach((number) => {
        if (numbers.includes(number)) count += 1;
      });
      const scoreKey = getScoreKey(count, this.#tickets[i], bonusNumber);
      if (scoreKey) scores[scoreKey] += 1;
    }

    return scores;
  }

  getProfit(matches) {
    const earnings = this.calculateEarnings(matches);
    const profit = calculatePercentageProfit(this.purchaseAmount, earnings);
    return profit;
  }
}

export default Vendor;
