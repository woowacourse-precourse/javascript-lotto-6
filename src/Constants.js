export const LOTTO_PRICE = 1000;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_NUMBERS_LENGTH = 6;

export const GUIDE_MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
});

export const PURCHASE_AMOUNT_ERROR_MESSAGES = Object.freeze({
  NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다',
  START_WITH_ZERO: '[ERROR] 구입 금액이 0으로 시작합니다.',
  LESS_THAN_LOTTO_PRICE: '[ERROR] 로또 한장보다 적은 구입 금액입니다.',
  NOT_DIVISIBLE_BY_THOUSAND: `[ERROR] 1,000원으로 나누어 떨어지지 않는 구입 금액입니다.`,
});

export const WINNING_NUMBERS_ERROR_MESSAGES = Object.freeze({
  INVALID_WINNING_NUMBERS_LENGTH: `[ERROR] 당첨 번호는 ${LOTTO_NUMBERS_LENGTH}개여야 합니다.`,
  NOT_NUMBER: '[ERROR] 당첨 번호는 숫자여야 합니다',
  OUT_OF_RANGE: `[ERROR] 당첨 번호는 ${LOTTO_MIN_NUMBER}부터 ${LOTTO_MAX_NUMBER} 사이의 숫자여야 합니다.`,
});

export const NUMBER_OF_PURCHASED_LOTTO_MESSAGE = (numberOfLottos) =>
  `\n${numberOfLottos}개를 구매했습니다.`;
