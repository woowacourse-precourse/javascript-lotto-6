const LOTTO_RULE = Object.freeze({
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LENGTH: 6,
  UNIT: 1000,
});

const GAME_MESSAGES = Object.freeze({
  NO_NUMBER: "입력값은 숫자여야 합니다.",
  NO_LENGTH: (length) => "로또 번호는 ${length}개여야 합니다.",
  NO_UNIQUE: "로또 번호는 중복되면 안됩니다.",
  NO_RANGE: (min, max) =>
    "로또 번호는 ${min}부터 ${max} 사이의 숫자여야 합니다.",
  BUY_UNIT: (unit) => "구매 금액은 ${unit}원 단위로 가능합니다.",
});

export { LOTTO_RULE, GAME_MESSAGES };
