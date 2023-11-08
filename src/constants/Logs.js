const USER_INPUT = Object.freeze({
  purchaseAmountInputPrompt: '구입금액을 입력해 주세요.\n',
  winningNumbersInputPrompt: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumberInputPrompt: '\n보너스 번호를 입력해 주세요.\n',
});

const USER_OUTPUT = Object.freeze({
  purchaseCountPrompt: '개를 구매했습니다.',
  winningStatistics: '\n당첨 통계\n---\n',
  fifthPrize: '3개 일치 (5,000원) - ',
  forthPrize: '4개 일치 (50,000원) - ',
  thirdPrize: '5개 일치 (1,500,000원) - ',
  secondPrize: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  firstPrize: '6개 일치 (2,000,000,000원) - ',
  totalProfitRatePrefix: '총 수익률은 ',
  totalProfitRateSuffix: '%입니다.\n',
});

export { USER_INPUT, USER_OUTPUT };
