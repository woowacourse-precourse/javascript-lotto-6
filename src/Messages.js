export const Messages = Object.freeze({
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  ENTER_WINNING_NUMBERS: "\n당첨 번호를 입력하세요.\n",
  ENTER_BONUS_NUMBER: "\n보너스 번호를 입력하세요.\n",
  WINNING_STATISTICS: "\n당첨 통계\n---",
  MATCH_3: "3개 일치 (5,000원) - ",
  MATCH_4: "4개 일치 (50,000원) - ",
  MATCH_5: "5개 일치 (1,500,000원) - ",
  MATCH_5_WITH_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  MATCH_6: "6개 일치 (2,000,000,000원) - ",
});

export const ErrorMessage = Object.freeze({
  INVALID_PURCHASE_AMOUNT: "[ERROR] 숫자가 잘못된 형식입니다.",
  INVALID_LOTTO_NUMBERS: "[ERROR] 로또 번호가 잘못되었습니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 보너스 번호가 잘못되었습니다.",
  ERROR_INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  ERROR_DUPLICATE_NUMBERS: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  ERROR_NOT_NUMBER: "[ERROR] 정수 숫자를 입력해주세요.",
  ERROR_INVALID_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
});
