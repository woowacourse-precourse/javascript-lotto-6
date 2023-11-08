const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  PRICE_UNIT_ERROR: `${ERROR_PREFIX} 금액 입력 단위가 1,000원이 아닙니다.`,
  FORMAT_ERROR: `${ERROR_PREFIX} 금액 입력 형식이 숫자가 아닙니다.`,
  LOTTO_FORMAT_ERROR: `${ERROR_PREFIX} 로또 번호 입력 형식이 숫자가 아닙니다.`,
  LOTTO_INTEGER_FORMAT_ERROR: `${ERROR_PREFIX} 로또 번호가 정수가 아닙니다.`,
  LOTTO_NUMBER_COUNT_ERROR: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  LOTTO_NUMBER_RANGE_ERROR: `${ERROR_PREFIX} 로또 번호는 1~45 사이의 숫자여야 합니다.`,
  LOTTO_NUMBER_DUPLICATE_ERROR: `${ERROR_PREFIX} 로또 번호는 중복될 수 없습니다.`,
  BONUS_NUMBER_FORMAT_ERROR: `${ERROR_PREFIX} 보너스 번호 입력 형식이 숫자가 아닙니다.`,
  BONUS_NUMBER_RANGE_ERROR: `${ERROR_PREFIX} 보너스 번호는 1~45 사이의 숫자여야 합니다.`,
  BONUS_NUMBER_DUPLICATE_ERROR: `${ERROR_PREFIX} 보너스 번호는 로또 당첨 번호와 중복될 수 없습니다.`,
  BONUS_NUMBER_INTEGER_FORMAT_ERROR: `${ERROR_PREFIX} 보너스 번호가 정수가 아닙니다.`,
};

export const CONSOLE_MESSAGE = {
  PROMPT_USER_PRICE: `로또 구입 금액을 1,000원 단위로 입력해 주세요.\n`,
  PROMPT_PURCHASED_AMOUNT: `개를 구매했습니다.`,
  PROMPT_USER_LOTTO_NUMBER: `로또 당첨 번호 6개를 쉼표(,)를 기준으로 입력해 주세요. 로또 번호의 숫자 범위는 1~45입니다.\n`,
  PROMPT_USER_BONUS_LOTTO_NUMBER: `보너스 번호 1개를 입력해 주세요.\n`,
};

export const LOTTO_PRICE_UNIT = 1000;

export const WINNING_PRIZE = {
  THREE_MATCH: 5000,
  FOUR_MATCH: 50000,
  FIVE_MATCH: 1500000,
  FIVE_PLUS_BONUS_MATCH: 30000000,
  SIX_MATCH: 2000000000,
};

export const MATCH_COUNT = {
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  FIVE_PLUS_BONUS: '5+1',
  SIX: '6',
};

export const NUMBER_RANGE = {
  MIN: 1,
  MAX: 45,
};
