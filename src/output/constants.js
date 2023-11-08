export const ERROR = {
  INPUT_ERROR: "[ERROR] 입력 오류",

  LOTTO_NUMBERS_DUPLICATED: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  LOTTO_NUMBERS_INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",

  BONUS_NUMBER_INVALID_RANGE: "[ERROR] 1~45 자리의 정수로 입력해주세요.",
  BONUS_NUMBER_DUPLICATED: "[ERROR] 당첨 번호와 중복된 번호가 있습니다.",

  PAYMENT_NOT_A_NUMBER: "[ERROR] 유효한 입력 형식이 아닙니다.",
  PAYMENT_NOT_IN_THOUSANDS: "[ERROR] 1,000원 단위로 입력해주세요.",
  PAYMENT_STARTS_WITH_ZERO: "[ERROR] 유효한 숫자 형식이 아닙니다.",

  WINNING_NUMBERS_INVALID_LENGTH:
    "[ERROR] 6개의 번호를 쉼표(,)를 기준으로 구분해주세요.",
  WINNING_NUMBERS_INVALID_RANGE: "[ERROR] 1~45 자리의 정수로 입력해주세요.",
  WINNING_NUMBERS_DUPLICATED: "[ERROR] 중복된 번호가 있습니다.",
};

export const MESSAGES = {
  RESULT: "당첨 통계",
  PAYMENT_INPUT: "구입금액을 입력해 주세요.",
  TOTAL_PROFIT_RATE: "총 수익률은 ${profitRate}%입니다.",
  TICKETS_PURCHASED: "개를 구매했습니다.",
  BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요.",
  WINNING_NUMBERS_INPUT: "당첨 번호를 입력해 주세요.",
};

export const CONSTANTS = {
  ONE_THOUSAND: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  PERCENTAGE_FACTOR: 100,
  LOTTO_NUMBER_LENGTH: 6,
};
