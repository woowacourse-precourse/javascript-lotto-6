const LOTTO_PRICE = 1000;

const RESULT = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
});

const PRIZE_MONEY = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

const ERROR = Object.freeze({
  notNumber: '[ERROR] 숫자만 입력해주세요.',
  notThousandWon: '[ERROR] 1,000원 단위로 입력해주세요.',
  notSixNumbers: '[ERROR] 6개의 숫자를 입력해주세요.',
  duplicatedNumbers: '[ERROR] 서로 다른 숫자를 입력해주세요.',
  outOfNumberRange: '[ERROR] 1 ~ 45사이의 숫자를 입력해주세요.',
  includedBonusNumber: '[ERROR] 보너스 번호가 중복되어서는 안됩니다.',
});

export { LOTTO_PRICE, RESULT, PRIZE_MONEY, ERROR };
