const ERROR_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT_NUMBER: "[ERROR] 구입 금액은 숫자만 입력 가능합니다.",
  PURCHASE_AMOUNT_UNDER:
    "[ERROR] 구입 금액은 1000원 이상부터 로또 구입이 구입 가능합니다.",
  PURCHASE_AMOUNT_UNIT:
    "[ERROR] 구입 금액은 1000원 단위로 로또를 구입해야 합니다.",
  PURCHASE_AMOUNT_ZERO: "[ERROR] 구입 금액은 0원이 될 수 없습니다.",
});

export default ERROR_MESSAGE;
