export const INPUTMESSAGES = Object.freeze({
  MONEY: "구입금액을 입력해 주세요.",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
});

export const OUTPUTMESSAGES = Object.freeze({
  WINNING_STATICS: [
    "3개 일치 (5,000원)",
    "4개 일치 (50,000원)",
    "5개 일치 (1,500,000원)",
    "5개 일치, 보너스 볼 일치 (30,000,000원)",
    "6개 일치 (2,000,000,000원)",
  ],
});

export const ERRORMESSAGES = Object.freeze({
  NOT_A_NUMBER: "[ERROR] 숫자가 아닙니다.",
  LOTTO_NUMBER_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATE: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  LOTTO_NUMBER_RANGE: "[ERROR] 로또 번호는 1~45 사이여야 합니다.",
  BONUS_DUPLICATE:
    "[ERROR] 보너스 로또 번호는 로또 번호와 중복되지 않아야 합니다.",
  MONEY_RANGE: "[ERROR] 구입 금액은 1000원 이상이어야 합니다.",
  MONEY_DEVISION: "[ERROR] 구입 금액은 1000원 단위여야 합니다.",
});
