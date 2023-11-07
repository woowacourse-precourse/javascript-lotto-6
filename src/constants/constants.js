export const MESSAGE = {
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
}

export const ERROR = {
  BLANK_ERROR: '[ERROR] 공백 없이 입력해주세요.',
  MONEY_NUMBER_ONLY_ERROR: "[ERROR] 구입 금액은 숫자만 가능합니다.",
  MONEY_UNIT_ERROR: "[ERROR] 구매 금액은 1000원 단위로 입력되어야합니다.",
  UNDER_ZERO_ERROR: "[ERROR] 잔액은 0 미만이 될 수 없습니다.",
  LOTTO_RANGE_ERROR: '[ERROR] 로또 번호는 1~45 사이로 입력해 주세요.',
  LOTTO_LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATE_ERROR: "[ERROR] 로또 번호는 중복 될 수 없습니다.",

}

export const NUMBER = {
  FIRST_PRIZE: 2_000_000_000,
  SECOND_PRIZE: 30_000_000,
  THIRD_PRIZE: 1_500_000,
  FORTH_PRIZE: 50_000,
  FIFTH_PRIZE: 5_000,

  TO_FIXED_DIGITS: 1, // 소수점 둘째자리에서 반올림

  LOTTO_PRICE: 1000

}