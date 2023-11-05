const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT_OF_NUMBERS: 6,
};

const CASH = {
  UNIT: 1000,
};

const rewardCountMap = new Map([
  [6, 2000000000],
  ['5 + 1', 30000000],
  [5, 1500000],
  [4, 50000],
  [3, 5000],
]);

const rewardMessageMap = new Map([
  [3, `3개 일치 (5,000원) - `],
  [4, `4개 일치 (50,000원) - `],
  [5, `5개 일치 (1,500,000원) - `],
  ['5 + 1', `5개 일치, 보너스 볼 일치 (30,000,000원) - `],
  [6, `6개 일치 (2,000,000,000원) - `],
]);

export { LOTTO, CASH, rewardCountMap, rewardMessageMap };
