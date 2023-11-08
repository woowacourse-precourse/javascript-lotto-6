const InfoMsg = {
  ASK_BUDGET: "구입 금액을 입력해 주세요.\n",
  SHOW_LOTTO_COUNT: "개를 구매했습니다.",
  ASK_LOTTO_NUM: "\n당첨 번호를 입력해 주세요.\n",
  ASK_BONUS_NUM: "\n보너스 번호를 입력해 주세요.\n",
  WINNING_STATS: "\n당첨통계\n---",
  fifthRankResult(count) {
    return `3개 일치 (5,000원) - ${count}개`;
  },
  fourthRankResult(count) {
    return `4개 일치 (50,000원) - ${count}개`;
  },
  thirdRankResult(count) {
    return `5개 일치 (1,500,000원) - ${count}개`;
  },
  secondRankResult(count) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
  },
  firstRankResult(count) {
    return `6개 일치 (2,000,000,000원) - ${count}개`;
  },
  totalRate(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
};

export default InfoMsg;
