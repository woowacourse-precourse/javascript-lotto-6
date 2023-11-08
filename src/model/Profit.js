import { RANKING } from '../common/constants.js';

class Profit {

  #amount

  constructor() {
    this.#amount = 0;
  }

  calculateProfit(moneyAmount, ranking) {
    const totalPrize = this.#calculateTotalPrize(ranking);
    this.#amount = (totalPrize / moneyAmount) * 100;
  }

  getAmount(){
    return this.#amount;
  }

  #calculateTotalPrize(ranking) {
    return Array.from(ranking.getRanks()).reduce((total, [key, count]) => {
      const rank = RANKING[key];
      return total + rank.prize * count;
    }, 0);
  }
}

export default Profit;
