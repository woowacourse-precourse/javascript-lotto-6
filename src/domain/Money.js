import NUMBER from "../static/Number.js";
import WINNING_REWARD from "../static/WinningReward.js";

class Money {
  #count;
  #revenue;

  constructor(input) {
    this.#count = Number(input) / NUMBER.price;
    this.#revenue = 0;
  }

  getAmount() {
    return this.#count;
  }

  getRevenueRate(winningStatic) {
    const purchasePrice = this.#count * NUMBER.price;
    winningStatic.forEach((count, index) => {
      this.#revenue += WINNING_REWARD[index] * count;
    });

    return ((this.#revenue / purchasePrice) * 100).toFixed(1);
  }
}

export default Money;
