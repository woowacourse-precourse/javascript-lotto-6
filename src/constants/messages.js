const inputMessage = {
  PURCHASE_MESSAGE: "구입금액을 입력해 주세요.\n",
  LOTTO_MESSAGE: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_MESSAGE: "\n보너스 번호를 입력해 주세요.\n",
  LOTTO_STATISTIC: "\n당첨 통계\n---",
};

const errorMessage = {
  INVALID_INTEGER:
    "[ERROR] 1,000원으로 나누어 떨어지는 양의 정수를 입력해야 합니다.",
  INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  HAS_DUPLICATES: "[ERROR] 중복된 값이 존재합니다.",
  INVALID_RANGE: "[ERROR] 1과 45 사이의 정수를 입력해야 합니다.",
};

export { inputMessage, errorMessage };
