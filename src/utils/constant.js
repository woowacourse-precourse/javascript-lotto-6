export const INPUT_MESSAGE = Object.freeze({
  MONEY_AMOUNT: '구입 금액을 입력해주세요.',
});

export const VALIDATION_RULE = Object.freeze({
  LOTTO_LENGTH: 6,
});

export const RANDOM_RULE = Object.freeze({
  RANDOM_MIN: 1,
  RANDOM_MAX: 45,
  RANDOM_SIZE: 6,
});

const ERROR_HEAD = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  INVALID_COUNT: `${ERROR_HEAD} 로또 번호는 6개여야 합니다.`,
  IS_NOT_NUMBER: `${ERROR_HEAD} 숫자를 입력하여야 합니다.`,
  NOT_1000_MULTIPLES: `${ERROR_HEAD} 1000원 단위의 숫자를 입력하여야 합니다.`,
});
