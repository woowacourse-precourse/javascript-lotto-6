import {
  IGNORE_MATCHING_COUNTS,
  PRIZE_MONEY_BY,
  RANKING,
  RANKING_BY,
} from './LottoInfo.js';

class WinningResults {
  #resultMap = new Map([
    [RANKING.first, 0],
    [RANKING.second, 0],
    [RANKING.third, 0],
    [RANKING.fourth, 0],
    [RANKING.fifth, 0],
  ]);

  saveResultBy(matchingCount) {
    if (IGNORE_MATCHING_COUNTS.includes(matchingCount)) return;

    const ranking = RANKING_BY[matchingCount];
    const rankingCount = this.#resultMap.get(ranking);
    this.#resultMap.set(ranking, rankingCount + 1);
  }

  getReversedResultMap() {
    const reversedResultArray = [...this.#resultMap].reverse();
    return new Map(reversedResultArray);
  }

  getProfit() {
    let profit = 0;
    this.#resultMap.forEach((count, ranking) => {
      profit += PRIZE_MONEY_BY[ranking] * count;
    });
    return profit;
  }
}

export default WinningResults;
