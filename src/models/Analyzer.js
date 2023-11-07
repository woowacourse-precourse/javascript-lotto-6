import { RANK } from '../constants/options.js';

class Analyzer {
  #rankedLotto;

  constructor(matchedNumberList) {
    this.#rankedLotto = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      losingLotto: 0,
    };
    this.matchedNumberList = matchedNumberList;
    this.getRankedLotto();
    this.countWinningRank();
    this.calculateTotalPrize();
  }

  getRankedLotto() {
    return this.#rankedLotto;
  }

  countWinningRank() {
    this.matchedNumberList.forEach((numbers) => {
      this.#rankedLotto[this.checkRank(numbers[0], numbers[1])] += 1;
    });
  }

  checkRank(winCount, bonusCount) {
    if (winCount === 6) return RANK.first[0];
    if (winCount === 5 && bonusCount) return RANK.second[0];
    if (winCount === 5) return RANK.third[0];
    if (winCount === 4) return RANK.fourth[0];
    if (winCount === 3) return RANK.fifth[0];
    return RANK.losingLotto[0];
  }

  calculateTotalPrize() {
    let totalPrize = 0;
    for (const rank in this.#rankedLotto) {
      totalPrize += RANK[rank][1] * this.#rankedLotto[rank];
    }

    return totalPrize;
  }

  calculateProfitRate() {
    const totalPrize = this.calculateTotalPrize();
    let paymentAmount = 0;
    for (const rank in this.#rankedLotto) {
      paymentAmount += this.#rankedLotto[rank];
    }
    paymentAmount *= 1000;

    return ((totalPrize / paymentAmount) * 100).toFixed(1);
  }
}

export default Analyzer;
