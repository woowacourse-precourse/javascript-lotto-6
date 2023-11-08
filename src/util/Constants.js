export const MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: "구매금액을 입력해 주세요.",
  INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  WINNING_RESULT: "당첨 통계",
  THREE_MATCH: "3개 일치 (5,000원) - ",
  FOUR_MATCH: "4개 일치 (50,000원) - ",
  FIVE_MATCH: "5개 일치 (1,500,000원) - ",
  FIVE_BONUS_MATCH: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  SIX_MATCH: "6개 일치 (2,000,000,000원) - ",
});

export const MATCH = Object.freeze({
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
})

export const MONEY = Object.freeze({
  THREE_MATCH: 5000,
  FOUR_MATCH: 50000,
  FIVE_MATCH: 1500000,
  FIVE_BONUS_MATCH: 30000000,
  SIX_MATCH: 2000000000,
})

export const NUMBER = Object.freeze({
  INCREASE: 1,
  LOTTO_MIN: 1,
  LOTTO_MAX: 45,
  LOTTO_LENGTH: 6,
})




export const ERROR = Object.freeze({
  INVALID_PURCAHSE_AMOUNT: "[ERROR] 유효한 구매 금액을 입력하세요.",
  INVALID_DUPLICATION: "[ERROR] 중복이 없어야 합니다.",
  INVALID_SIX_NUMBERS: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_INTEGER: "[ERROR] 정수를 입력해 주세요.",
  INVALID_NUMBER: "[ERROR] 유효한 번호를 입력해 주세요.",
});
