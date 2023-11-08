export const LOTTO_GAME = Object.freeze({
  PRICE_UNIT: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  TOTAL_NUMBERS: 6,
});

export const INPUT_MESSAGES = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASED_LOTTOS: (num) => `\n${num}개를 구매했습니다.`,
});

export const ERROR_MESSAGES = Object.freeze({
  PREFIX: '[ERROR]',
  INVALID_AMOUNT_RANGE: '구입금액은 1000원 이상, 1000원 단위로 입력해주세요.',
  INVALID_AMOUNT_TYPE: '구입 금액은 숫자를 입력해주세요.',
});
