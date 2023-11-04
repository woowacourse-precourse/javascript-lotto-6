const MESSAGES = {
  LOTTO_PURCHASE_MESSAGE: "구입금액을 입력해 주세요.\n",
};

const ERRORS = {
  EMPTY_INPUT: "[ERROR] 입력을 하지 않으셨습니다.",
  NOT_NUMBER: "[ERROR] 숫자를 입력하세요.",
  INVALID_PURCHASE_AMOUNT: "[ERROR] 1000원 단위로 구입해주세요.",

  INVALID_NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  CONTAIN_DUPLICATE_NUMBER: "[ERROR] 중복된 로또 번호가 있습니다.",
  NUMBER_RANGE_ALERT: "[ERROR] 1부터 45사이의 숫자여야 합니다.",
};

export { MESSAGES, ERRORS };
