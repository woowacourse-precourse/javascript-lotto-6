import {
  IGNORE_MATCHING_COUNTS,
  PRIZE_MONEY_BY,
  RANKING_BY,
  RESULTS_INITIAL_ARRAYS,
} from './constant/LottoInfo.js';

class WinningResults {
  #resultMap = new Map(RESULTS_INITIAL_ARRAYS);

  saveResultBy(matchingCount) {
    if (IGNORE_MATCHING_COUNTS.includes(matchingCount)) return;

    const ranking = RANKING_BY[matchingCount];
    const rankingCount = this.#resultMap.get(ranking);
    this.#resultMap.set(ranking, rankingCount + 1);
  }

  get() {
    return [...this.#resultMap];
  }

  getProfitRate(amount) {
    const profit = this.#getProfit();
    const profitRate = (profit / amount) * 100;
    return profitRate;
  }

  #getProfit() {
    let profit = 0;
    this.#resultMap.forEach((count, ranking) => {
      profit += PRIZE_MONEY_BY[ranking] * count;
    });

    return profit;
  }
}

export default WinningResults;
