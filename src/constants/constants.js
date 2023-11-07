export const INPUT_MESSAGE = {
  inputPurchaseAmount: "구입금액을 입력해 주세요.\n",
  intputWinningNumbers: "\n당첨 번호를 입력해 주세요.\n",
  intputBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  printLottoCnt: (cnt) => `\n${cnt}개를 구매했습니다.`,
  printLottoStatistics: "\n당첨 통계\n---",
  printRate: (rate) => `총 수익률은 ${rate}%입니다.`
};

export const PRIZES_MESSAGE = {
  3: '3개 일치 (5,000원) - ',
  4: '4개 일치 (50,000원) - ',
  5: '5개 일치 (1,500,000원) - ',
  bonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  6: '6개 일치 (2,000,000,000원) - ',
};

export const PRIZES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  bonus: 30000000,
  6: 2000000000,
};


Object.freeze(INPUT_MESSAGE);
Object.freeze(OUTPUT_MESSAGE);
Object.freeze(PRIZES_MESSAGE);
Object.freeze(PRIZES);