const INPUT = {
  LOTTO_MONEY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const OUTPUT = {
  LOTTO_TICKETS_COUNT: (ticketNumber) => `\n${ticketNumber}개를 구매했습니다.`,
  PRIZE_RESULT_TITLE: "\n당첨 통계\n---",
  ALL_RANK_RESULT: ({ rankCount, matchedCount, money, bonusMatch }) =>
    `${matchedCount}개 일치${
      bonusMatch ? ", 보너스 볼 일치" : ""
    } (${money.toLocaleString("ko-KR")}원) - ${rankCount}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

Object.freeze(INPUT);
Object.freeze(OUTPUT);
export default { INPUT, OUTPUT };
