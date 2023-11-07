export const ERROR_MSG = Object.freeze({
  NUMBER_ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
  NUMBER_RANGE: "[ERROR] 로또 번호의 숫자 범위는 1~45까지입니다.",
  PRICE: "[ERROR] 로또 1장의 가격은 1,000원입니다",
  EXISTING_NUM: "[ERROR] 중복되지 않는 숫자를 입력해주세요.",
  REQ_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INTERGER: "[ERROR] 정수만 허용됩니다.",
});

export const INPUT_MSG = Object.freeze({
  ENTER_PRICE: "구입금액을 입력해 주세요.",
  LOTTERY_NUMS: "당첨 번호를 입력해 주세요.",
  BONUS_NUM: "보너스 번호를 입력해 주세요.",
});

export const LOTTO_RULES = Object.freeze({
  START: 1,
  END: 45,
  LENGTH: 6,
  PRICE: 1000,
});

export const LOTTO_RESULTS = {
  num3: 0,
  num4: 0,
  num5: 0,
  num5WithBonus: 0,
  num6: 0,
};
