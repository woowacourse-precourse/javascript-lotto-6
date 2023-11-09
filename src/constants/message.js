const prompt = {
  ASK_AMOUNT: '구입금액을 입력해 주세요.\n',
  ASK_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ASK_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const result = {
  PURCHASE: '개를 구매했습니다.',
  STATISTIC: '\n당첨 통계',
  LINE: '---',
  COUNT: '개',
  RATE_OF_RETURN: '총 수익률은 ',
  PERCENT: '%입니다.',
  WINNING: {
    THREE_MATCHES: '3개 일치 (5,000원) -',
    FOUR_MATCHES: '4개 일치 (50,000원) -',
    FIFTH_MATCHES: '5개 일치 (1,500,000원) -',
    FIFTH_AND_BONUS_MATCHES: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
    SIX_MATCHES: '6개 일치 (2,000,000,000원) -',
  },
};
export { prompt, result };
