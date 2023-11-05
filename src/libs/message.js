const MESSAGES = {
  INPUT_LOTTO_PURCHASE: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
};

const ERRORS = {
  EMPTY_INPUT: "[ERROR] 입력을 하지 않으셨습니다.",
  NOT_NUMBER: "[ERROR] 숫자를 입력하세요.",
  INVALID_PURCHASE_AMOUNT: "[ERROR] 1000원 단위로 구입해주세요.",

  INVALID_NUMBERS_LENGTH: "[ERROR] 입력된 숫자의 개수를 확인해주세요.",
  CONTAIN_DUPLICATE: "[ERROR] 중복된 로또 번호가 있습니다.",
  NUMBER_RANGE_ALERT: "[ERROR] 1부터 45사이의 숫자여야 합니다.",
};

export { MESSAGES, ERRORS };
