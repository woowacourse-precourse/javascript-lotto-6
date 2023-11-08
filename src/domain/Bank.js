import { PRIZE_MONEY } from '../constants/index.js';

class Bank {
  #money;
  #prizeCount;
  #profit;
  #profitRate;

  constructor(money, prize) {
    this.#money = money;
    this.#prizeCount = prize;
    this.#profit = 0;
    this.#profitRate;
  }

  #calculateProfit() {
    for (const key in this.#prizeCount) {
      this.#profit += this.#prizeCount[key] * PRIZE_MONEY[key];
    }
  }

  getProfitRate() {
    this.#calculateProfit();
    this.#profitRate = (this.#profit / this.#money) * 100;
    return this.#profitRate.toFixed(1);
  }
}

export default Bank;
