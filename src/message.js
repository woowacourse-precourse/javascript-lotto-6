export const GAME = Object.freeze({
  INPUT: {
    AMOUNT: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBER: "당첨 번호를 입력해 주세요\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  WINNING_STATISTICS: "당첨 통계\n---\n",
});

export const ERROR = Object.freeze({
  NOT_NUMBER: "[ERROR] 0 이상의 자연수로 입력해야 합니다.",
  INVALID_AMOUNT: "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",
  INVALID_ARRAY_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 중복된 번호가 포함되어 있습니다",
});
