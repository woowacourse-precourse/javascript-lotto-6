const ERROR_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT_NUMBER: "[ERROR] 구입 금액은 숫자만 입력 가능합니다.",
  PURCHASE_AMOUNT_UNDER:
    "[ERROR] 구입 금액은 1000원 이상부터 로또 구입이 구입 가능합니다.",
  PURCHASE_AMOUNT_UNIT:
    "[ERROR] 구입 금액은 1000원 단위로 로또를 구입해야 합니다.",
  PURCHASE_AMOUNT_ZERO: "[ERROR] 구입 금액은 0원이 될 수 없습니다.",

  LOTTO_NUMBER: "[ERROR] 로또 번호는 숫자로만 구성되어야 합니다.",
  LOTTO_DUPLICATE: "[ERROR] 로또 번호는 서로 중복될 수 없습니다.",
  LOTTO_COUNT: "[ERROR] 로또 번호는 6개로 구성되어야 합니다.",
  LOTTO_RANGE: "[ERROR] 로또 번호는 1과 45 사이의 값이어야 합니다",
});

export default ERROR_MESSAGE;
