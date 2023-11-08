const ERROR = Object.freeze({
  IS_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  IS_NAN: '[ERROR] 로또 번호는 숫자여야 합니다.',
  NOT_DUPLICATE: '[ERROR] 로또 번호는 중복이 아닌 6개여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1에서 45사이의 번호여야 합니다.',
  MONEY_UNIT: '[ERROR] 구입 금액은 1000원 단위여야 합니다.',
  MONEY_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  EMPTY: '[ERROR] 공백입니다.',
});

export default ERROR;
