const MESSAGES = {
  ASK_PAYMENT: "구입금액을 입력해 주세요.\n",
  ASK_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  ASK_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",

  PURCHASED_LOTTOS: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_STATISTICS: "\n당첨 통계\n---",
  WINNER_COUNT: (text, prize, count) =>
    `${text} (${prize.toLocaleString()}원) - ${count}개`,
  TOTAL_PROFIT_RATE: (rate) => `\n총 수익률은 ${rate}%입니다.`,
};

export default MESSAGES;
