export const INPUT_MESSAGES = {
  INPUT_CASH_MESSAGE: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  INPUT_BOUNUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGES = {
  PURCHASE_QUANTITY: "개를 구매했습니다.",
  WINNING_STATISTICS: "\n당첨 통계\n---",
  CORRECT_COUNT_3: "3개 일치 (5,000원) - ",
  CORRECT_COUNT_4: "4개 일치 (50,000원) - ",
  CORRECT_COUNT_5: "5개 일치 (1,500,000원) - ",
  CORRECT_COUNT_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  CORRECT_COUNT_6: "6개 일치 (2,000,000,000원) - ",
  RATE_OF_RETURN: "총 수익률은 ",
};

export const ERROR_MESSAGES = {
  CASH_NOT_INTEGER_IN_THOUSANDS:
    "[ERROR] 구입금액은 1000 단위 정수로 입력이 가능합니다.",
  CASH_NOT_EXIST: "[ERROR] 빈 값은 입력할 수 없습니다.",
  WINNING_NUMBER_NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  WINNING_NUMBER_OUT_OF_BOUNDS:
    "[ERROR] 로또 번호는 1 ~ 45 사이의 수여야 합니다.",
  WINNING_NUMBER_DUPLICATION:
    "[ERROR] 로또 번호는 중복되지 않는 수여야 합니다.",
  BONUS_NUMBER_OUT_OF_BOUNDS:
    "[ERROR] 보너스 번호는 1 ~ 45 사이의 수여야 합니다.",
  BONUS_NUMBER_DUPLICATION_WITH_WINNING_NUMBER:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  BONUS_NUMBER_NOT_INTEGER: "[ERROR] 보너스 번호는 정수형이어야 합니다.",
  LOTTO_LENGTH_NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_VALUE_DUPLICATED: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  LOTTO_INCLUDE_STRING: "[ERROR] 로또 번호에는 문자를 입력할 수 없습니다.",
};
