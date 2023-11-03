const PRICE = {
  TICKET: 1_000,
};

const ERROR = {
  NOT_NUMBER: "[ERROR] 구입 금액은 숫자만 입력해 주세요.",
  NOT_DIVISIBLE_BY_TICKET:
    "[ERROR] 구입 금액이 티켓 가격인 1,000원 단위가 아닙니다",
};

Object.freeze(PRICE);
Object.freeze(ERROR);

export default { ...PRICE, ERROR };
