import { RANKING_BY } from './LottoInfo.js';

class WinningResults {
  #results = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ]);

  saveResultBy(matchingCount) {
    if ([0, 1, 2].includes(matchingCount)) return;

    const ranking = RANKING_BY[matchingCount];
    const rankingCount = this.#results.get(ranking);
    this.#results.set(ranking, rankingCount + 1);
  }
}

export default WinningResults;
