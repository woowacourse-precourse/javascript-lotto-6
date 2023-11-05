const GAME_MESSAGE = {
  BUY_AMOUNT: "구입금액을 입력해주세요.\n",
  GUESS_NUM: "당첨 번호를 입력해주세요.\n",
  BONUS_NUM: "보너스 번호를 입력해주세요\n",
  STATIC: "당첨 통계\n---",
};

const ERROR_MESSAGE = {
  NUMBER: "[ERROR] 숫자만 입력할 수 있습니다",
  MIN_MONEY: "[ERROR] 최소 구입 금액은 1000원입니다.",
  DIVISION: "[ERROR] 1000원 단위의 로또를 구입해주세요.",
};

module.exports = { GAME_MESSAGE, ERROR_MESSAGE };
