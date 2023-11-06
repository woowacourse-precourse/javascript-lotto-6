export const USER_INPUT = Object.freeze({
  LOTTO_PRICE: '구입금액을 입력해 주세요. \n',
  TARGET_NUMBER: '당첨 번호를 입력해 주세요. \n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요. \n'
})

export const MESSAGE = Object.freeze({
  LOTTO_TICKET: '개를 구매했습니다.'
})

export const ERROR_MESSAGE = Object.freeze({
  PRICE_NOT_INPUT: '[ERROR] 금액이 입력되지 않았습니다.',
  PRICE_NOT_STRING: '[ERROR] 금액은 숫자가 입력되어야 합니다',
  PRICE_NOT_ZERO: '[ERROR] 금액은 0원 일 수 없습니다.',
  PRICE_NOT_REST: '[ERROR] 금액은 1,000원 단위여야 합니다.',
  TARGET_NUM_SIX: '[ERROR] 당첨 번호는 6개여야 합니다.',
  TARGET_NUM_MIN_MAX: '[ERROR] 당첨 번호는 1에서 45사이의 정수여야 합니다.',
  TARGET_NUM_STRING: '[ERROR] 당첨 번호는 문자가 아닌 숫자를 입력해야 합니다.',
  TARGET_NUM_SAME: '[ERROR] 당첨 번호는 중복되지 않아야 합니다.',
  BONUS_NUM_MIN_MAX: '[ERROR] 보너스 번호는 1에서 45사이의 정수여야 합니다.',
  BONUS_NUM_STRING: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  BONUS_NUM_DUPLICATE: '[ERROR] 보너스 번호는 당첨번호와 중복되지 않아야 합니다.'
})

export const LOTTO_MONEY = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000
})

export const LOTTO_RESULT = Object.freeze({
  FIRST: '6개 일치 (2,000,000,000원)',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  THIRD: '5개 일치 (1,500,000원)',
  FOURTH: '4개 일치 (50,000원)',
  FIFTH: '3개 일치 (5,000원)'
})

export const PRICE_UNIT = 1000;
export const PRICE_ZERO = 0;
export const DELIMITER = ',';
export const DELIMITER_SPACE = ', ';
export const LOTTO_LENGTH = 6;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
