import { RANKING_BY } from './Message.js';

class WinningResults {
  #results = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ]);

  saveResultBy(matchingNumbersCount) {
    if ([0, 1, 2].includes(matchingNumbersCount)) return;
    const ranking = RANKING_BY[matchingNumbersCount];
    const rankingCount = this.#results.get(ranking);
    this.#results.set(ranking, rankingCount + 1);
  }
}

export default WinningResults;
