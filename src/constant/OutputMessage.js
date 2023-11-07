import LOTTO_RULE from "./LottoRule.js";

const OUTPUT_MESSAGE = {
  PURCHASE: (ticketCount) => `\n${ticketCount}개를 구매했습니다.`,
  NUMBERS: (lotto) => `[${lotto.join(", ")}]`,
  STATISTICS: "\n당첨 통계\n---",
  FIRST_PLACE: (firstPlace) =>
    `6개 일치 (${LOTTO_RULE.PRIZE_MONEY[0].toLocaleString()}원) - ${firstPlace}개`,
  SECOND_PLACE: (secondPlace) =>
    `5개 일치, 보너스 볼 일치 (${LOTTO_RULE.PRIZE_MONEY[1].toLocaleString()}원) - ${secondPlace}개`,
  THIRD_PLACE: (thirdPlace) =>
    `5개 일치 (${LOTTO_RULE.PRIZE_MONEY[2].toLocaleString()}원) - ${thirdPlace}개`,
  FOURTH_PLACE: (fourthPlace) =>
    `4개 일치 (${LOTTO_RULE.PRIZE_MONEY[3].toLocaleString()}원) - ${fourthPlace}개`,
  FIFTH_PLACE: (fifthPlace) =>
    `3개 일치 (${LOTTO_RULE.PRIZE_MONEY[4].toLocaleString()}원) - ${fifthPlace}개`,
  PROFIT_RATE: (profitRate) =>
    `총 수익률은 ${profitRate.toFixed(
      LOTTO_RULE.PROFIT_RATE_TO_FIXED
    )}%입니다.`,
};

export default OUTPUT_MESSAGE;
