const CONSOLE_MESSAGE = Object.freeze({
  TYPE_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASE_COUNT: '개를 구매했습니다.',
  NEW_LINE: '\n',
  TYPE_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  TYPE_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  RESULT_STATISTICS: '\n당첨 통계\n---',

  CORRECT_THREE: '3개 일치 (5,000원) - ',
  CORRECT_FOUR: '4개 일치 (50,000원) - ',
  CORRECT_FIVE: '5개 일치 (1,500,000원) - ',
  CORRECT_FIVEBONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  CORRECT_SIX: '6개 일치 (2,000,000,000원) - ',
  COUNT: '개',

  TOTAL_PROFIT_IS: '총 수익률은 ',
  PERCENT: '%입니다.',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자가 아닙니다.',
  NOT_DIVISIBLE_BY_THOUSAND: '[ERROR] 구입금액은 1,000원 단위여야 합니다.',
  BETWEEN_MIN_AND_MAX: '[ERROR] 1부터 45 사이의 숫자만 가능합니다.',
  DUPLICATED: '[ERROR] 중복된 값이 있습니다.',
  SHOULD_BE_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
});

const CONSTANT_NUMBERS = Object.freeze({
  THOUSAND: 1000,
  LOTTO_NUMBER_MIN: 1,
  LOTTO_NUMBER_MAX: 45,
  LOTTO_NUMBER_COUNT: 6,

  THREE_PRIZE: 5000,
  FOUR_PRIZE: 50000,
  FIVE_PRIZE: 1500000,
  FIVE_BONUS_PRIZE: 30000000,
  SIX_PRIZE: 2000000000,
});

export { CONSOLE_MESSAGE, ERROR_MESSAGE, CONSTANT_NUMBERS };
