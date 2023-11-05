import {
  COUNT,
  DEFAULT_NUM,
  MATCH_COUNTS,
  PRIZE_MONEY,
  RANKING,
} from './constants/conditions';

export default class MatchingTable {
  #table = new Map([
    [
      {
        matchCount: MATCH_COUNTS.three,
        ranking: RANKING.fifth,
        prize: PRIZE_MONEY.fifth,
      },
      DEFAULT_NUM,
    ],
    [
      {
        matchCount: MATCH_COUNTS.four,
        ranking: RANKING.fourth,
        prize: PRIZE_MONEY.fourth,
      },
      DEFAULT_NUM,
    ],
    [
      {
        matchCount: MATCH_COUNTS.five,
        isBonusMatch: false,
        ranking: RANKING.third,
        prize: PRIZE_MONEY.third,
      },
      DEFAULT_NUM,
    ],
    [
      {
        matchCount: MATCH_COUNTS.five,
        isBonusMatch: true,
        ranking: RANKING.second,
        prize: PRIZE_MONEY.second,
      },
      DEFAULT_NUM,
    ],
    [
      {
        matchCount: MATCH_COUNTS.all,
        ranking: RANKING.first,
        prize: PRIZE_MONEY.first,
      },
      DEFAULT_NUM,
    ],
  ]);

  updateTable(count, isBonusMatch) {
    this.#table.forEach((value, key) => {
      if (key.matchCount === count && key.isBonusMatch === isBonusMatch) {
        this.#table.set(key, value + COUNT.plus);
      }
    });
    return this.#table;
  }

  getTable() {
    return this.#table;
  }
}
