const MESSAGES = Object.freeze({
  purchaseAmountQuery: '구입금액을 입력해 주세요.\n',
  purchaseResult: '개를 구매했습니다.',
  mainNumberQuery: '당첨 번호를 입력해 주세요.\n',
  bonusNumberQuery: '보너스 번호를 입력해 주세요.\n',
  raffleStatistic: '당첨 통계\n---',
  blank: '',
  printLottoNumberDelimiter: ', ',
  printLottoBracket(lottoNumbers) {
    return `[${lottoNumbers}]`;
  },
  printRaffleStatistic([fifth, fourth, third, second, first]) {
    return [
      `3개 일치 (5,000원) - ${fifth}개`,
      `4개 일치 (50,000원) - ${fourth}개`,
      `5개 일치 (1,500,000원) - ${third}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
      `6개 일치 (2,000,000,000원) - ${first}개`,
    ];
  },
  printEarningRate(earningRate) {
    return `총 수익률은 ${earningRate}%입니다.`;
  },
});

export default MESSAGES;
