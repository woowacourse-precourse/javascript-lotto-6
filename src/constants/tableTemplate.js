import {
  DEFAULT_NUM,
  MATCH_COUNTS,
  PRIZE_MONEY,
  RANKING,
} from './conditions.js';

const TABLE_TEMPLATE = Object.freeze([
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

export default TABLE_TEMPLATE;
