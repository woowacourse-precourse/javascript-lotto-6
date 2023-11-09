const UNIT = 1000;
const MIN = 1;
const MAX = 45;
const COUNT = 6;

const WINNING_CATEGORY = {
  5: '3개 일치 (5,000원)',
  4: '4개 일치 (50,000원)',
  3: '5개 일치 (1,500,000원)',
  2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  1: '6개 일치 (2,000,000,000원)',
};

const WINNINGS = {
  5: 5000,
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000,
};

export { UNIT, MIN, MAX, COUNT, WINNING_CATEGORY, WINNINGS };
