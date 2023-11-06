const ERRORS = {
  PURCHASE_AMOUNT_NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  PURCHASE_AMOUT_BELOW_PRICE:
    '[ERROR] 구입 금액은 로또 1장의 가격보다 높아야 합니다.',
  PURCHASE_AMOUNT_TOO_LARGE: '[ERROR] 처리할 수 없는 구입 금액입니다.',
  PURCHASE_AMOUT_NOT_DIVISIBLE:
    '[ERROR] 구입 금액은 1,000원 단위로 입력받아야 합니다.',
  WINNING_NUMBERS_INCLUDE_BLANK:
    '[ERROR] 입력에 의미없는 공백이 존재할 수 없습니다.',
  WINNING_NUMBERS_NOT_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  WINNING_NUMBERS_NOT_BETWEEN_RANGE:
    '[ERROR] 로또 번호는 1~45 사이여야 합니다.',
  WINNING_NUMBERS_DUPLICATED: '[ERROR] 로또 번호는 중복될 수 없습니다.',
};

const NUMBERS = {
  LOTTO_PRICE: 1000,
  LOTTO_LOW_END: 1,
  LOTTO_HIGH_END: 45,
};

const CONSTANTS = {
  ERRORS,
  NUMBERS,
};

export default CONSTANTS;
