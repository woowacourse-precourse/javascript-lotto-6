export const INPUT_MESSAGE = Object.freeze({
  MONEY_AMOUNT: '구입 금액을 입력해주세요.',
  WINNING: '당첨 번호를 입력해 주세요.',
  BONUS: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  QUANTITY: '개를 구매했습니다.',
  PROFIT_HEAD: '총 수익률은 ',
  PROFIT_TAIL: '입니다.',
  END_MESSAGE: '당첨 통계\n---',
  RESULT_HEAD: '개 일치',
  RESULT_BONUS: '보너스 볼 일치',
});

export const VALIDATION_RULE = Object.freeze({
  LOTTO_LENGTH: 6,
  MONEY_FACTOR: 1000,
});

export const RANDOM_RULE = Object.freeze({
  RANDOM_MIN: 1,
  RANDOM_MAX: 45,
  RANDOM_SIZE: 6,
});

export const REGEX = Object.freeze({
  NUMBER_REGEX: /\D/,
  CHECK_NUMBERRANGE: /[1-45]/,
  CHECK_COMMA: /[^\,\D]/,
});

const ERROR_HEAD = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  INVALID_COUNT: `${ERROR_HEAD} 로또 번호는 6개여야 합니다.`,
  IS_NOT_NUMBER: `${ERROR_HEAD} 숫자를 입력하여야 합니다.`,
  NOT_1000_MULTIPLES: `${ERROR_HEAD} 1000원 단위의 숫자를 입력하여야 합니다.`,
  NOT_ALLOW_DUPLICATE: `${ERROR_HEAD} 중복된 숫자는 허용 되지 않습니다.`,
  NO_DUPLICATE_BONUS: `${ERROR_HEAD} 당첨 숫자와 보너스 숫자는 중복되지 않아야 합니다.`,
  INVALID_RANGE: `${ERROR_HEAD} 번호는 1 ~ 45 사이의 숫자여야 합니다.`,
  INVALID_CHAR: `${ERROR_HEAD} 쉼표 이외의 특수문자 입력은 불가합니다.`,
  INVALID_BONUS_LENGTH: `${ERROR_HEAD} 보너스 번호는 1개여야 합니다.`,
  INVALID_VALUE : `${ERROR_HEAD} 존재하지 않는 값 입니다.`
});

export const RANK = Object.freeze({
  FIRST: { COUNT: 6, BONUS: false, PRIZE: 2000000000 },
  SECOND: { COUNT: 5, BONUS: true, PRIZE: 30000000 },
  THIRD: { COUNT: 5, BONUS: false, PRIZE: 1500000 },
  FOURTH: { COUNT: 4, BONUS: false, PRIZE: 50000 },
  FIFTH: { COUNT: 3, BONUS: false, PRIZE: 5_000 },
  MISS: { COUNT: 0, BONUS: false, PRIZE: 0 },
});
