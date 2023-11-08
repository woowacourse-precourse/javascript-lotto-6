export const INPUT_MESSAGE = Object.freeze({
  REQUEST_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  REQUEST_WINNER_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  REQUEST_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_CONFIRMATION: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
  WINNING_STATISTICS: "\n당첨 통계\n---",
});

export const ERROR_MESSAGE = Object.freeze({
  PURCHASE_ERROR: "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",
  LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_ERROR: "[ERROR] 로또 번호는 중복이 있으면 안됩니다.",
  FORMAT_ERROR: "[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_ERROR: "[ERROR] 보너스 숫자가 잘못된 형식입니다.",
  BONUS_INCLUDES_WINNER_ERROR:
    "[ERROR] 보너스 숫자가 당첨 번호에 포함되어 있습니다.",
  BONUS_FORMAT_ERROR: "[ERROR] 보너스 숫자가 1~45 사이의 숫자여야 합니다.",
});
