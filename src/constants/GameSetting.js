const PRIZE = Object.freeze({
  match3: 5000,
  match4: 50000,
  match5: 1500000,
  match5Bonus: 30000000,
  match6: 2000000000,
});

const PRIZE_STRUCTURE = {
  match3: 0,
  match4: 0,
  match5: 0,
  match5Bonus: 0,
  match6: 0,
};

const SETTING = Object.freeze({
  EMPTY: '',
  KEY_TITLE: 'match',
  UNIT: 1000,
  RANGE_MIN: 1,
  RANGE_MAX: 45,
  MAX_SIZE: 6,
  MIN_VALUE: 0,
  MATCH_CONDITION: 5,
  INCREASE: 1,
  PERCENT: 100,
  DECIMAL_POINT: 1,
});

export { PRIZE, SETTING, PRIZE_STRUCTURE };
