import { PRIZE_MONEY, RANKING } from './conditions.js';

const RANKING_PRIZE = Object.freeze({
  [RANKING.first]: PRIZE_MONEY.first,
  [RANKING.second]: PRIZE_MONEY.second,
  [RANKING.third]: PRIZE_MONEY.third,
  [RANKING.fourth]: PRIZE_MONEY.fourth,
  [RANKING.fifth]: PRIZE_MONEY.fifth,
});

export default RANKING_PRIZE;
