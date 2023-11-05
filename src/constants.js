const MESSAGE = {
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  PURCHASE_COUNT: (cnt) => `${cnt}개를 구매했습니다.`,
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  WINNING_STATISTICS: '당첨 통계',
  DASHES: '---',
  SAME_NUMBERS_COUNT: (numCnt, winnings, lottoCnt) =>
    `${numCnt}개 일치 (${winnings}원) - ${lottoCnt}개`,
  TOTAL_ROR: (total) => `총 수익률은 ${total}%입니다.`,
};

Object.freeze(MESSAGE);
