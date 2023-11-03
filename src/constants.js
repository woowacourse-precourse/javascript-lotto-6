const ERRORS = {
  PURCHASE_AMOUNT_NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  PURCHASE_AMOUT_BELOW_PRICE:
    '[ERROR] 구입 금액은 로또 1장의 가격보다 높아야 합니다.',
  PURCHASE_AMOUNT_TOO_LARGE: '[ERROR] 처리할 수 없는 구입 금액입니다.',
  PURCHASE_AMOUT_NOT_DIVISIBLE:
    '[ERROR] 구입 금액은 1,000원 단위로 입력받아야 합니다.',
};

const NUMBERS = {
  LOTTO_PRICE: 1000,
};

const CONSTANTS = {
  ERRORS,
  NUMBERS,
};

export default CONSTANTS;
