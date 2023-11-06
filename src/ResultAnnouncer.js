import { PRIZE_MONEY } from './constants/numbers.js';
import View from './View.js';

class ResultAnnouncer {
  constructor({ tickets, myNumbers, bonusNumber, rank, profitRate }) {
    this.tickets = tickets;
    this.myNumbers = myNumbers;
    this.bonusNumber = bonusNumber;
    this.rank = rank;
    this.profitRate = profitRate;
    this.sum = 0;
  }

  anounceProfit() {
    this.sumPrizeMoney();
    this.calculateProfit();
    View.printWinningResult(this.rank);
    View.printProfitRate(this.profitRate);
  }

  sumPrizeMoney() {
    return Object.entries(this.rank).forEach(rankElem => {
      this.sum += PRIZE_MONEY[rankElem[0]] * rankElem[1];
    });
  }

  calculateProfit() {
    this.profitRate = ((this.sum / (this.tickets.length * 1000)) * 100).toFixed(
      1,
    );
  }
}

export default ResultAnnouncer;
