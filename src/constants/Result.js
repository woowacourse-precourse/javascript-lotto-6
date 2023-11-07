const RESULT = Object.freeze({
  RESULT_MESSAGE: '\n당첨 통계\n---',

  RESULT_RANK_6: '6개 일치 (2,000,000,000원) - ',
  RESULT_RANK_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  RESULT_RANK_5: '5개 일치 (1,500,000원) - ',
  RESULT_RANK_4: '4개 일치 (50,000원) - ',
  RESULT_RANK_3: '3개 일치 (5,000원) - ',

  COUNT: (num) => `${num}개`,
  RATE_OF_RETURN: (num) => `총 수익률은 ${num}%입니다.`,
});

export default RESULT;
