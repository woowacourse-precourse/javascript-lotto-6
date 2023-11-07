import Comparator from './Comparator.js';
import ProfitCalculator from './ProfitCalculator.js';

function isValidMatchesCount(matchesCount, target) {
  return Object.prototype.hasOwnProperty.call(matchesCount, target);
}

class WinStastics {
  #statics;
  constructor() {
    this.#statics = {
      matchesCount: {
        3: 0, 4: 0, 5: 0, 6: 0, bonus: 0,
      },
      earningRate: 0,
    };
    this.calculator = new ProfitCalculator();
    this.comparator = new Comparator();
  }

  get statics() {
    return Object.assign(this.#statics, {});
  }

  setMatchesCount() {
    const numOfWinningNumMatches = this.comparator.matchWinNumbersWithTicket();

    [...numOfWinningNumMatches.entries()].forEach(([matchesCount, count]) => {
      if (isValidMatchesCount(this.#statics.matchesCount, matchesCount)) {
        this.#statics.matchesCount[matchesCount] = count;
      }
    });
  }

  setEarningRate() {
    const numOfWinningNumMatches = this.#statics.matchesCount;

    const totalIncome = this.calculator.calculateTotalIncome(numOfWinningNumMatches);
    const earningRate = this.calculator.calculateEarningRate(totalIncome);

    this.#statics.earningRate = earningRate;
  }
}

export default WinStastics;
