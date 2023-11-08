const OUTPUT = Object.freeze({
  NEW_LINE: '',
  BUY_TICKET: lottos => `${lottos.length}개를 구매했습니다.`,
  FIFTH_PRIZE: count => `3개 일치 (5,000원) - ${count}개`,
  FOURTH_PRIZE: count => `4개 일치 (50,000원) - ${count}개`,
  THIRD_PRIZE: count => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND_PRIZE: count => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST_PRIZE: count => `6개 일치 (2,000,000,000원) - ${count}개`,
  RETURN_RATE: rate => `총 수익률은 ${rate}%입니다.`,
});

export default OUTPUT;
