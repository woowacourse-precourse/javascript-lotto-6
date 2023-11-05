const USER_PROMPT = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  SHOW_LOTTO_COUNT(count) {
    return `\n${count}개를 구매했습니다.`;
  },
  WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const DIVISOR = 1000;

const ERROR = {
  INVALID_AMOUNT: "[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.",
};

export { USER_PROMPT, DIVISOR, ERROR };
