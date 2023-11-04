const MESSAGE = Object.freeze({
  START: '구입금액을 입력해 주세요.',
  WINNING_INPUT: '당첨 번호를 입력해 주세요.',
  BONUS_INPUT: '보너스 번호를 입력해 주세요',
  CALC: '당첨 통계\n---',
});

const MESSAGE_INPUT = (num) => Object.freeze({
  COUNT: `${num}개를 구매했습니다.`,
  RANK_THHREE: `3개 일치 (5,000원) - ${num}개`,
  RANK_FOUR: `4개 일치 (50,000원) - ${num}개`,
  RANK_FIVE: `5개 일치 (1,500,000원) - ${num}개`,
  RANK_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
  RANK_SIX: `6개 일치 (2,000,000,000원) - ${num}개`,
  RATE: `총 수익률은 ${num}%입니다.`
})

export { MESSAGE, MESSAGE_INPUT };