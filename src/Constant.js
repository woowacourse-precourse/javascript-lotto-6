export const MESSAGE = {
  GET_MONEY_INPUT: '구입금액을 입력해 주세요.',
  GET_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  GET_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const LOTTO = {
  MONEY_UNIT: 1000,
  MONEY_LIMIT: 100000,
};

export const ERROR = {
  PREFIX: '[ERROR]',
  MONEY_NOT_A_NUMBER: '로또 구매 금액은 숫자로 이루어져야 합니다.',
  MONEY_NOT_A_POSITIVE: '로또 구매 금액은 양의 정수여야 합니다.',
  EXCEED_MONEY_LIMIT: `로또 구매 금액은 ${LOTTO.MONEY_LIMIT}원 이하여야 합니다.`,
  INVALID_MONEY_UNIT: `로또 구매 금액은 ${LOTTO.MONEY_UNIT} 단위여야 합니다.`,
};
