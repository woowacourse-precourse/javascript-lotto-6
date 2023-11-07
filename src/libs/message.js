const MESSAGES = {
  INPUT_LOTTO_PURCHASE: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONNUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",

  TOTAL_RESULS_HEADER: "\n당첨 통계\n---",
  PRIZE_CATEGORIES: [
    "6개 일치 (2,000,000,000원) -",
    "5개 일치, 보너스 볼 일치 (30,000,000원) -",
    "5개 일치 (1,500,000원) -",
    "4개 일치 (50,000원) -",
    "3개 일치 (5,000원) -",
  ],
};

const ERRORS = {
  EMPTY_INPUT: "[ERROR] 입력을 하지 않으셨습니다.",
  SHOULD_BUY: "[ERROR] 구입하지 않으셨습니다.",
  NOT_NUMBER: "[ERROR] 숫자를 입력하세요.",
  NEGATIVE_NUMBER: "[ERROR] 양수를 입력하세요.",
  INVALID_PURCHASE_AMOUNT: "[ERROR] 1000원 단위로 구입해주세요.",
  INVALID_NUMBERS_LENGTH: "[ERROR] 입력된 숫자의 개수를 확인해주세요.",
  CONTAIN_DUPLICATE: "[ERROR] 중복된 로또 번호가 있습니다.",
  NOT_INTEGER: "[ERROR] 입력값이 정수가 아닙니다.",
  NUMBER_RANGE_ALERT: "[ERROR] 1부터 45사이의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATE:
    "[ERROR] 보너스 번호는 당첨 번호와 중복되서는 안됩니다.",
};

export { MESSAGES, ERRORS };
