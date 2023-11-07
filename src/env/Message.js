export const Message = Object.freeze({
  INPUT_AMOUNT: "구입금액을 입력해 주세요.\n",
  BUY: "개를 구매했습니다.",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "당첨 통계",
  BR: "---",
});

export const ERROR = Object.freeze({
  INCORRECT_UNIT: "[ERROR] 1000원 단위로 입력해주세요.",
  INVALID_DUPLICATE_BONUS: "[ERROR] 보너스 번호가 중복되었습니다.",
  INVALID_INPUT_VALUE: "[ERROR] 입력 금액이 잘못된 형식입니다.",
  INVALID_INPUT_LOTTO_VALUE: "[ERROR] 로또 번호가 잘못된 형식입니다.",
  INVALID_NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_DUPLICATE_NUMBERS:
    "[ERROR] 로또 번호를 중복된 숫자 없이 입력해 주세요.",
  INVALID_RANGE: "[ERROR] 1-45 범위의 숫자를 입력해 주세요.",
});
