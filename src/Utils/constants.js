const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',
});

const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '\n당첨 통계',
  WINNING_LINE: '---',
})

const ERROR_MESSAGE = Object.freeze({
  USER_INPUT_PURCHASE: '[ERROR] 올바른 구입금액을 입력해 주세요 (1,000원 단위, 양수).',
  USER_INPUT_ONLYNUM: '[ERROR] 구입금액은 숫자만 입력할 수 있습니다.',
  USER_INPUT_NUMBERS: '[ERROR] 올바른 로또 번호를 입력해 주세요 (1부터 45까지의 숫자, 쉼표로 구분된 6개 숫자.',
  USER_INPUT_BONUSE: '[ERROR] 올바른 보너스 번호를 입력해 주세요 (1부터 45까지의 숫자)',
  USER_INPUT_DUPLICATE: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  USER_INPUT_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다',
})

const LOTTO_NUMBER = Object.freeze({
  CONDITION_LENGTH: 6,
  CONDITION_MIN: 1,
  CONDITION_MAX: 45,
  MIN_PURCHASE: 1000,
  INITNUM: 0,
  CONDITION_NUM: '0123456789'
})

const PRIZE = Object.freeze({
  NONE: 0,
  RANK_FIVE: 5000,
  RANK_FOUR: 50000,
  RANK_THREE: 1500000,
  RANK_TWO: 30000000,
  RANK_ONE: 2000000000,
  EARNINGS_CONDITION: 100,

  MATCHING_COUNT_ONE: 1,
  MATCHING_COUNT_TWO: 2,
  MATCHING_COUNT_THREE: 3,
  MATCHING_COUNT_FOUR: 4,
  MATCHING_COUNT_FIVE: 5,
  MATCHING_COUNT_SIX: 6,
})

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE, LOTTO_NUMBER, PRIZE };