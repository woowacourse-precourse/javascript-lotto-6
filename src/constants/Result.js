const RESULT = Object.freeze({
  RESULT_PREFIX: '\n당첨 통계\n---',

  RANK_6: '6개 일치 (2,000,000,000원) - ',
  RANK_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  RANK_5: '5개 일치 (1,500,000원) - ',
  RANK_4: '4개 일치 (50,000원) - ',
  RANK_3: '3개 일치 (5,000원) - ',

  COUNT: (num) => `${num}개`,
  RATE_OF_RETURN: (num) => `총 수익률은 ${num}%입니다.`,
});

const RESULT_MESSAGE = Object.freeze({
  match3: RESULT.RANK_3,
  match4: RESULT.RANK_4,
  match5: RESULT.RANK_5,
  match5Bonus: RESULT.RANK_5_BONUS,
  match6: RESULT.RANK_6,
});

export { RESULT, RESULT_MESSAGE };
