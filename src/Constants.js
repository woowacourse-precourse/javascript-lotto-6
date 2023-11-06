const LOTTO_RULE = Object.freeze({
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LENGTH: 6,
  UNIT: 1000,
});

const GAME_MESSAGES = Object.freeze({
  ERROR: {
    PREFIX: "[ERROR]",
    LOTTO: {
      NO_NUMBER: "로또 번호는 숫자여야 합니다.",
      NO_LENGTH: (length) => "로또 번호는 ${length}개여야 합니다.",
      NO_UNIQUE: "로또 번호는 유일해야 합니다.",
      NO_POSITIVE: "로또 번호는 양수여야 합니다.",
      NO_INTEGER: "로또 번호는 정수여야 합니다.",
      NO_RANGE: (min, max) =>
        "로또 번호는 ${min}부터 ${max} 사이의 숫자여야 합니다.",
    },
    INPUT:{
      NO_NUMBER: "입력값은 숫자여야 합니다.", 
      NO_POSITIVE: "입력값은 양수여야 합니다.",
      NO_INTEGER: "입력값은 정수여야 합니다.",
    },
    BUY: {
      NO_NUMBER: "구매금액은 숫자여야 합니다.",
      NO_POSITIVE:"구매금액은 양수여야 합니다.",
      BUY_UNIT: (unit) => "구매 금액은 ${unit}원 단위로 가능합니다.",
    },
  },
  BUY: {
    START: "구입금액을 입력해주세요.",
    RESULT: (count) => `${count}개를 구매했습니다.`,
  },
});

export { LOTTO_RULE, GAME_MESSAGES };
