import { OPTIONS, RANK, PRIZE } from '../constants/lottoConstants.js';

class Analyzer {
  #rankedLotto;

  constructor() {
    this.#rankedLotto = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      losing: 0,
    };
  }

  getRankedLotto() {
    return this.#rankedLotto;
  }

  countWinningRank(matchedNumberList) {
    matchedNumberList.forEach((numbers) => {
      this.#rankedLotto[this.#checkRank(numbers[0], numbers[1])] += 1;
    });
  }

  #checkRank(winCount, bonusCount) {
    if (winCount === 6) return RANK.first;
    if (winCount === 5 && bonusCount) return RANK.second;
    if (winCount === 5) return RANK.third;
    if (winCount === 4) return RANK.fourth;
    if (winCount === 3) return RANK.fifth;
    return RANK.losing;
  }

  #calculateTotalPrize() {
    let totalPrize = 0;
    for (const rank in this.#rankedLotto) {
      totalPrize += PRIZE[rank] * this.#rankedLotto[rank];
    }

    return totalPrize;
  }

  calculateProfitRate() {
    const totalPrize = this.#calculateTotalPrize();
    let paymentAmount = 0;
    for (const rank in this.#rankedLotto) {
      paymentAmount += this.#rankedLotto[rank];
    }
    paymentAmount *= OPTIONS.unit;

    return ((totalPrize / paymentAmount) * 100).toFixed(1);
  }
}

export default Analyzer;
