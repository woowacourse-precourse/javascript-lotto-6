import Comparator from './Comparator.js';
import ProfitCalculator from './ProfitCalculator.js';

class WinStastics {
  #statistics;
  constructor() {
    this.#statistics = {
      matchesCount: {
        3: 0, 4: 0, 5: 0, 6: 0, bonus: 0,
      },
      earningRate: 0,
    };
    this.calculator = new ProfitCalculator();
    this.comparator = new Comparator();
  }

  get statistics() {
    return Object.assign(this.#statistics, {});
  }

  setMatchesCount() {
    const numOfWinningNumMatches = this.comparator.matchWinNumbersWithTicket();

    [...numOfWinningNumMatches.entries()].forEach(([matchesCount, count]) => {
      if (this.isValidMatchesCount(this.#statistics.matchesCount, matchesCount)) {
        this.#statistics.matchesCount[matchesCount] = count;
      }
    });
  }

  isValidMatchesCount(matchesCount, target) {
    return Object.prototype.hasOwnProperty.call(matchesCount, target);
  }

  setEarningRate() {
    const numOfWinningNumMatches = this.#statistics.matchesCount;

    const totalIncome = this.calculator.calculateTotalIncome(numOfWinningNumMatches);
    const earningRate = this.calculator.calculateEarningRate(totalIncome);

    this.#statistics.earningRate = earningRate;
  }
}

export default WinStastics;
