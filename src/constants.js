export const ERROR_MESSAGE = {
  notNumber: '잘못된 입력입니다. 숫자만 입력해주세요.',
  oneThousandMore: '최소 1,000원 이상의 금액을 입력해주세요.',
  oneThousandUnit: '1,000원 단위로 입력해주세요.',
  dailyLimitExceeded: '한 회차에 10만원을 초과할 수 없습니다.',
  onlySixNumber: '로또 번호는 6개여야 합니다.',
  invalidNumberRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  noDuplicate: '로또 숫자는 서로 중복될 수 없습니다.',
};

export const CONSTANT_VALUE = {
  lottoPrice: 1000,
  dailyLimitPrice: 100000,
  numberCheck: /^[0-9]+$/,
};

export const PRIZE_AMOUNTS = {
  threeMatch: 5000,
  fourMatch: 50000,
  fiveMatch: 1500000,
  fiveAndBonusMatch: 30000000,
  sixMatch: 2000000000,
};
