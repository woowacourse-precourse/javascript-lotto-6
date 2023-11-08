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
  USER_INPUT_PURCHASE: '올바른 구입금액을 입력해 주세요 (1,000원 단위, 양수).',
  USER_INPUT_ONLYNUM: '구입금액은 숫자만 입력할 수 있습니다.',
  USER_INPUT_NUMBERS: '올바른 로또 번호를 입력해 주세요 (1부터 45까지의 숫자, 쉼표로 구분된 6개 숫자.',
  USER_INPUT_BONUSE: '올바른 보너스 번호를 입력해 주세요 (1부터 45까지의 숫자)',
  USER_INPUT_DUPLICATE: '로또 번호에 중복된 숫자가 있습니다.'

})

const LOTTO_NUMBER = Object.freeze({
  LOTTO_CONDITION_LENGTH: 6,
  LOTTO_CONDITION_MIN: 1,
  LOTTO_CONDITION_MAX: 45,
  LOTTO_MIN_PURCHASE: 1000,
  LOTTO_INITNUM: 0,

})