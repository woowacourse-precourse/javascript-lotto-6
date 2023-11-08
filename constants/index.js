export const ERROR_MESSAGE = {
  BUY_AMOUNT_ERROR: '[ERROR] 구입 금액은 1,000원 단위여야합니다.',
  NOT_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
  NOT_INTEGER: '[ERROR] 정수만 입력 가능합니다. ',
  NOT_IN_RANGE: '[ERROR] 1 ~ 45 사이 숫자만 입력 가능합니다. ',
  NUMBER_OF_ELEMENTS_ERROR: '[ERROR] 로또볼 숫자는 6개 입력되어야합니다.',
  NO_DUPLICATED_BONUS_NUMBERS:
    '[ERROR] 당첨 번호에 있는 숫자는 보너스 번호로 선택될 수 없습니다.',
  NO_DUPLICATED_NUMBERS:
    '[ERROR] 모든 로또 번호는 중복 없이 한번씩만 나와야합니다.',
};

export const INPUT_MESSAGE = {
  GET_BUY_AMOUNT: '구입금액을 입력해 주세요.',
  GET_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  GET_WINNING_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const LOTTO_VALUE = {
  TICKET_PRICE: 1000,
  START_NUMBER: 1,
  END_NUMBER: 45,
};

export const PRIZE_BY_RANK = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

export const WINNING_CONDITION_BY_RANK = {
  1: '6개 일치',
  2: '5개 일치, 보너스 볼 일치',
  3: '5개 일치',
  4: '4개 일치',
  5: '3개 일치',
};
