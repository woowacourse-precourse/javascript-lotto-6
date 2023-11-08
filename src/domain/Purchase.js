import WINNING_REWARD from '../constants/WinningReward.js';

class Purchase {
  #amount;
  #revenue;

  constructor(amount) {
    this.#amount = Number(amount) / 1000;
    this.#revenue = 0;
  }

  getAmount() {
    return this.#amount;
  }

  getRevenueRate(winningStatistic) {
    const purchasePrice = this.#amount * 1000;
    winningStatistic.forEach((count, index) => {
      this.#revenue += WINNING_REWARD[index] * count;
    });

    return ((this.#revenue / purchasePrice) * 100).toFixed(1);
  }
}

export default Purchase;
