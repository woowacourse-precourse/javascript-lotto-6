const LOTTO_CONTROLLER = {
  TICKET_PRICE: 1_000,
};

const ERROR = {
  PRICE_NOT_NUMBER: "[ERROR] 구입 금액은 숫자만 입력해 주세요.",
  PRICE_NOT_DIVISIBLE:
    "[ERROR] 구입 금액이 티켓 가격인 1,000원 단위가 아닙니다",
};

Object.freeze(LOTTO_CONTROLLER);
Object.freeze(ERROR);

export default { ...LOTTO_CONTROLLER, ERROR };
