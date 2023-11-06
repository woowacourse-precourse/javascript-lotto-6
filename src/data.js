const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT_OF_NUMBERS: 6,
};

const CASH = {
  UNIT: 1000,
};

const MATCH = {
  INITIAL_COUNT: 0,
  UNIT: 1,
  FIVE: 5,
  FIRST_REWARD_CONDITION: 6,
  SECOND_REWARD_CONDITION: '5 + 1',
  THIRD_REWARD_CONDITION: 5,
  FOURTH_REWARD_CONDITION: 4,
  FIFTH_REWARD_CONDITION: 3,
};

const TOTAL_REWARD = {
  INITIAL_REWARD: 0,
};

const rewardCountMap = new Map([
  [6, 2000000000],
  ['5 + 1', 30000000],
  [5, 1500000],
  [4, 50000],
  [3, 5000],
]);

const UTILITY = {
  ZERO: 0,
  EMPTY: '',
  JOIN_SEPERATOR: ', ',
  SPLIT_SEPERATOR: ',',
  PERCENT: 100,
  FIXED_DIGITS: 1,
};

const rewardMessageMap = new Map([
  [3, `3개 일치 (5,000원) - `],
  [4, `4개 일치 (50,000원) - `],
  [5, `5개 일치 (1,500,000원) - `],
  ['5 + 1', `5개 일치, 보너스 볼 일치 (30,000,000원) - `],
  [6, `6개 일치 (2,000,000,000원) - `],
]);

export {
  LOTTO,
  CASH,
  MATCH,
  TOTAL_REWARD,
  rewardCountMap,
  rewardMessageMap,
  UTILITY,
};
