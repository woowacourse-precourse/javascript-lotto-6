export const ERROR = Object.freeze({
  INVALID_LOTTO_LENGTH: '6자리 숫자가 아닙니다.',
  DUPLICATE_NUMBER: '중복된 숫자가 존재합니다.',
  DUPLICATE_BONUS_NUMBER: '당첨 번호에 이미 이 값이 존재합니다.',
  INVALID_NUMBER: '숫자가 아닙니다.',
  INVALID_INTEGER: '정수가 아닙니다.',
  INVALID_INDEX: '잘못된 인덱스에 접근했습니다.',
  INVALID_RANGE: '범위를 넘어선 값입니다.',
  NOT_DIVISIBLE_BY_ONE_THOUSAND: '1000원으로 나눠지지 않습니다.',
});

export const CONSTANT = Object.freeze({
  LOTTO_NUMBER_LENGTH: 6,
  ONE_THOUSAND: 1000,
  ZERO: 0,
  MIN_VALUE: 1,
  MAX_VALUE: 45,
  COMMA: ',',
  THREE_MATCH_PRIZE: 5000,
  FOUR_MATCH_PRIZE: 50000,
  FIVE_MATCH_PRIZE: 1500000,
  FIVE_MATCH_WITH_BONUS_PRIZE: 30000000,
  SIX_MATCH_PRIZE: 2000000000,
  MATCHING_COUNT: 1,
  INITIAL_MATCH_COUNT: 0,
  INITIAL_LOTTO_PRIZE: 0,
  THREE_MATCH_TEXT: '3개 일치',
  FOUR_MATCH_TEXT: '4개 일치',
  FIVE_MATCH_TEXT: '5개 일치',
  FIVE_MATCH_WITH_BONUS_TEXT: '5개 일치, 보너스 볼 일치',
  SIX_MATCH_TEXT: '6개 일치',
});

export const CONSOLE_MESSAGE = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  PURCHASED_MESSAGE: '개를 구매했습니다.',
});
