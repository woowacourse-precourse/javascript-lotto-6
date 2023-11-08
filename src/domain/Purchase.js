import NUMBER from '../constants/Number.js';
import WINNING_REWARD from '../constants/WinningReward.js';

class Purchase {
  #amount;
  #revenue;

  constructor(amount) {
    this.#amount = Number(amount) / NUMBER.price;
    this.#revenue = 0;
  }

  getAmount() {
    return this.#amount;
  }

  getRevenueRate(winningStatistic) {
    const purchasePrice = this.#amount * NUMBER.price;
    winningStatistic.forEach((count, index) => {
      this.#revenue += WINNING_REWARD[index] * count;
    });

    return ((this.#revenue / purchasePrice) * NUMBER.percent).toFixed(NUMBER.roundDigit);
  }
}

export default Purchase;
