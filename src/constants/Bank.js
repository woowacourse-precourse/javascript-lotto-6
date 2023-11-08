import { WINNING_RANK_COUNT } from './lotto';
import { ZERO } from './validate';

const PRIZE_AMOUNT_BY_BANK = Object.freeze({
  [ZERO]: 0,
  [WINNING_RANK_COUNT.firstPlace]: 2000000000,
  [WINNING_RANK_COUNT.secondPlace]: 30000000,
  [WINNING_RANK_COUNT.thirdPlace]: 1500000,
  [WINNING_RANK_COUNT.fourthPlace]: 50000,
  [WINNING_RANK_COUNT.fifthPlace]: 5000,
});

export default PRIZE_AMOUNT_BY_BANK;
