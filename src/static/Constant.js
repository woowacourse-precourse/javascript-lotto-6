const Message = Object.freeze({
  LOTTO_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  LOTTO_TICKET: "개를 구매했습니다.",
  LOTTO_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  LOTTO_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

const ErrorMessage = Object.freeze({
  LOTTO_COUNT_ERROR:
    "[ERROR] 구입 금액은 1000원 단위로 나누어 떨어져야 합니다.",
  LOTTO_NUMBER_ERROR: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  BONUS_LENGTH_ERROR: "[ERROR] 보너스 번호는 1개여야 합니다.",
  USER_NUMBER_ERROR: "[ERROR] 입력한 값이 숫자가 아닙니다.",
  USER_DUPLICATE_ERROR: "[ERROR] 입력값은 모두 다른 숫자로 구성되어야 합니다.",
  USER_LENGTH_ERROR: "[ERROR] ",
});

export { Message, ErrorMessage };
