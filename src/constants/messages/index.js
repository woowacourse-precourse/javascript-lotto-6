export const MESSAGES = Object.freeze({
  ERROR: {
    PREFIX: "[ERROR]",
    COMMON: {
      NOT_NUMBER: "입력값은 숫자여야 합니다.",
      NOT_INTEGER: "입력값은 정수여야 합니다.",
    },
    LOTTO: {
      NOT_UNIQUE: "로또 번호는 중복되지 않아야 합니다.",
      NOT_LENGTH: (length) => `로또 번호는 ${length}개여야 합니다.`,
      NOT_ON_RANGE: (min, max) =>
        `로또 번호는 ${min} ~ ${max} 사이의 숫자여야 합니다.`,
    },
    BUY: {
      NOT_MULTIPLE_OF: (multiple) =>
        `구매 금액은${multiple}의 배수여야 합니다.`,
    },
  },
});
