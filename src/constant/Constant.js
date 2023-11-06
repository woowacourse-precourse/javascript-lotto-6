// Constants.js
const Messages = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  LOTTO_PURCHASED: "로또 %d개를 구매했습니다.",
  WINNING_NUMBERS_INPUT: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요.",
};

const Errors = {
  ERROR_PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.",
  ERROR_INVALID_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  ERROR_INVALID_BONUS: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
};

const PrizeMoney = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

module.exports = {
  Messages,
  Errors,
  PrizeMoney,
};
