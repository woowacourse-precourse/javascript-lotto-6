const SELECT_NUMBER_ERROR = Object.freeze({
  NUMBER: '번호는 1~45 사이여야 합니다.',
  COUNT: '번호는 6개가 입력되어야 합니다. 쉼표(,)를 통해 구분해주세요.',
  DUPLICATE: '번호는 중복되어서는 안됩니다.',
});

const BONUS_NUMBER_ERROR = Object.freeze({
  DUPLICATE: '보너스 번호는 번호와 중복되어서는 안됩니다.',
  NUMBER: ' 1~45사이의 숫자만 입력해주세요',
});

const PURCHASE_AMOUNT_ERROR = Object.freeze({
  NUMBER: '구입 금액은 1000단위로 나누어 떨어져야 합니다.',
});

export const ERROR_MESSAGE_OBJECT = Object.freeze({
  SELECT_NUMBER_ERROR,
  BONUS_NUMBER_ERROR,
  PURCHASE_AMOUNT_ERROR,
});

export { SELECT_NUMBER_ERROR, BONUS_NUMBER_ERROR, PURCHASE_AMOUNT_ERROR };
