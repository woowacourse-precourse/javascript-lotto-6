const USER_PROMPT = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  SHOW_LOTTO_AMOUNT(amount) {
    return `\n${amount}개를 구매했습니다.`;
  },
};

const DIVISOR = 1000;

export { USER_PROMPT, DIVISOR };
