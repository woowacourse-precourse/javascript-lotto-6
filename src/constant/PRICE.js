const PRICE = {
  TICKET: 1_000,
};

const ERROR = {
  NOT_NUMBER: "[ERROR] 구입 금액은 숫자만 입력해 주세요.",
  START_WITH_ZERO: "[ERROR] 구압 금액이 0으로 시작하면 안 됩니다.",
  NOT_DIVISIBLE_BY_TICKET:
    "[ERROR] 구입 금액이 티켓 가격인 1,000원 단위가 아닙니다.",
};

Object.freeze(PRICE);
Object.freeze(ERROR);

export default { ...PRICE, ERROR };
