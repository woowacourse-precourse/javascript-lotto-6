import { PRIZE_MONEY } from '../constants/numbers.js';
import View from '../view/View.js';

class ResultAnnouncer {
  constructor({ tickets, rank }) {
    this.tickets = tickets;
    this.rank = rank;
    this.sum = 0;
  }

  anounceProfit() {
    this.sumPrizeMoney();
    const profitRate = this.calculateProfit();
    View.printWinningResult(this.rank);
    return View.printProfitRate(profitRate);
  }

  sumPrizeMoney() {
    return Object.entries(this.rank).forEach(rankElem => {
      this.sum += PRIZE_MONEY[rankElem[0]] * rankElem[1];
    });
  }

  calculateProfit() {
    return ((this.sum / (this.tickets.length * 1000)) * 100).toFixed(1);
  }
}

export default ResultAnnouncer;
