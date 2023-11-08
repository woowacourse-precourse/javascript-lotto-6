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

const MESSAGE = Object.freeze({
  PURCHASE: '구입금액을 입력해 주세요.\n',
  BLINK: '\n',
  NUMBER_OF_LOTTO: '개를 구매했습니다.',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  TITLE: '\n당첨 통계',
  DIVIDER: '---',
  UNIT: '개',
  FIFTH_RESULT: '3개 일치 (5,000원) - ',
  FOURTH_RESULT: '4개 일치 (50,000원) - ',
  THIRD_RESULT: '5개 일치 (1,500,000원) - ',
  SECOND_RESULT: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST_RESULT: '6개 일치 (2,000,000,000원) - ',
  PRICE_RATE_PRE: '총 수익률은 ',
  PRICE_RATE_POST: '%입니다.',
});

export { LOTTO_PRICE, RESULT, PRIZE_MONEY, ERROR, MESSAGE };
