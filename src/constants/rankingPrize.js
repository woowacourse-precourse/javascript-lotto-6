import { PRIZE_MONEY } from './conditions';

const PRIZE = Object.freeze({
  three: PRIZE_MONEY.fifth,
  four: PRIZE_MONEY.fourth,
  fiveNotBonus: PRIZE_MONEY.third,
  fiveAndBonus: PRIZE_MONEY.second,
  all: PRIZE_MONEY.first,
});

export default PRIZE;
