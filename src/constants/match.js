const MATCH_THREE = '3개 일치';
const MATCH_FOUR = '4개 일치';
const MATCH_FIVE = '5개 일치';
const MATCH_FIVE_AND_BONUS = '5개 일치, 보너스 볼 일치';
const MATCH_SIX = '6개 일치';

const MATCH_STRINGS = {
  matchThree: MATCH_THREE,
  matchFour: MATCH_FOUR,
  matchFive: MATCH_FIVE,
  matchFiveAndBonus: MATCH_FIVE_AND_BONUS,
  matchSix: MATCH_SIX,
};

const MATCH_WINNING_AMOUNTS = {
  [MATCH_THREE]: 5000,
  [MATCH_FOUR]: 50000,
  [MATCH_FIVE]: 1500000,
  [MATCH_FIVE_AND_BONUS]: 30000000,
  [MATCH_SIX]: 2000000000,
};

Object.freeze(MATCH_STRINGS);
Object.freeze(MATCH_WINNING_AMOUNTS);

export { MATCH_STRINGS, MATCH_WINNING_AMOUNTS };
