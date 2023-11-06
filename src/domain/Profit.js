import { PRIZE_ARR } from "../utils/constants.js";
import { print } from "../utils/print.js";

class Profit {
  total_profit = 0;
  total_rate = 0;

  constructor() {}

  calcProfit(ranking, purchase_amount) {
    ranking.map((el, i) => (this.total_profit += el * PRIZE_ARR[4 - i]));
    this.total_rate = ((this.total_profit / purchase_amount) * 100).toFixed(1);
  }

  printProfit() {
    print(`총 수익률은 ${this.total_rate}%입니다.`);
  }

  retrunProfit(ranking, purchase_amount) {
    this.calcProfit(ranking, purchase_amount);
    this.printProfit();
  }
}

export default Profit;
