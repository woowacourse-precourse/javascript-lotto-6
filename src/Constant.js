export const MESSAGE = {
  GET_MONEY_INPUT: '구입금액을 입력해 주세요.',
  GET_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  GET_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  MONEY_UNIT: 1000,
  MONEY_LIMIT: 100000,
  COUNT: 6,
};

export const ERROR = {
  PREFIX: '[ERROR]',
  MONEY_NOT_A_NUMBER: '로또 구매 금액은 숫자로 이루어져야 합니다.',
  MONEY_NOT_A_POSITIVE: '로또 구매 금액은 양의 정수여야 합니다.',
  EXCEED_MONEY_LIMIT: `로또 구매 금액은 ${LOTTO.MONEY_LIMIT}원 이하여야 합니다.`,
  INVALID_MONEY_UNIT: `로또 구매 금액은 ${LOTTO.MONEY_UNIT} 단위여야 합니다.`,
  INVALID_LOTTO_NUMBER_RANGE: '로또 번호는 1에서 45 사이의 숫자여야 합니다.',
  INVALID_LOTTO_NUMBER_COUNT: '로또 번호는 6개여야 합니다.',
  DUPLICATED_LOTTO_NUMBERS: '로또 번호는 중복될 수 없습니다.',
  BONUS_NOT_A_NUMBER: '보너스 번호는 숫자여야 합니다.',
  BONUS_ALREADY_IN_LOTTO: '로또 번호와 보너스 번호는 중복될 수 없습니다.',
  BONUS_NOT_IN_RANGE: '로또 번호는 1에서 45 사이의 숫자여야 합니다.',
};
