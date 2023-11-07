export const MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  PURCHASE_RESULT: (count) => `${count}개를 구매했습니다.`,
  WINNIG_NUMBER: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  WINNING_STATISTICS: "당첨 통계\n---",
  THREE_SAME: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOUR_SAME: (count) => `4개 일치 (50,000원) - ${count}개`,
  FIVE_SAME: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  BONUS_SAME: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  SIX_SAME: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (value) => `총 수익률은 ${count}%입니다.`,
});
