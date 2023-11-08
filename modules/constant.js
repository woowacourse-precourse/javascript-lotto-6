const PURCHASE_PRICE = 1000;

const MESSAGE = {
  moneyInput: '구입금액을 입력해 주세요.\n',
  lottoNumberInput: '당첨 번호를 입력해 주세요.\n',
  bonusNumberInput: '보너스 번호를 입력해 주세요.\n',
  amount: '개를 구매했습니다.\n',
  winResult: '당첨 통계\n',
  line: '---',
};

const PRIZE_MONEY = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

const RANDOM_NUMBER_RANGE = {
  min: 1,
  max: 45,
  length: 6,
};

const MATCH_COUNT = {
  six: 'six',
  fiveBonus: 'fiveBonus',
  five: 'five',
  four: 'four',
  three: 'three',
  zero: 'zero',
};

const WIN_MESSAGE = {
  matchSix: `6개 일치 (${PRIZE_MONEY.first.toLocaleString()}원)`,
  matchFiveWithBonus: `5개 일치, 보너스 볼 일치 (${PRIZE_MONEY.second.toLocaleString(
    PRIZE_MONEY.second
  )}원)`,
  matchFive: `5개 일치 (${PRIZE_MONEY.third.toLocaleString()}원)`,
  matchFour: `4개 일치 (${PRIZE_MONEY.fourth.toLocaleString()}원)`,
  matchThree: `3개 일치 (${PRIZE_MONEY.fifth.toLocaleString()}원)`,
};

const ERROR_MESSAGE = {
  isNotNumber: '[ERROR] 숫자를 입력해 주세요.',
  isNotInRange: `[ERROR] ${RANDOM_NUMBER_RANGE.min} ~ ${RANDOM_NUMBER_RANGE.max} 범위의 숫자를 입력해 주세요.`,
  isNotInThousands: '[ERROR] 천원 단위로 입력해 주세요.',
  isNotSixLength: '[ERROR] 당첨 번호는 6자리로 입력해 주세요.',
  isDuplicated: '[ERROR] 숫자가 중복 됐습니다.',
};

export {
  MESSAGE,
  PRIZE_MONEY,
  WIN_MESSAGE,
  PURCHASE_PRICE,
  MATCH_COUNT,
  ERROR_MESSAGE,
  RANDOM_NUMBER_RANGE,
};
