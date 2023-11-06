export const LOTTO_PLAY = Object.freeze({
  inputAmount : '구입금액을 입력해 주세요.',
  purchaseComplete : '개를 구매했습니다.',
  inputLucky : '당첨 번호를 입력해 주세요.',
  inputBonus : '보너스 번호를 입력해 주세요.',
  winningStatistics : '당첨 통계',
  statisticsContour : '---',
});

export const LOTTO_ERROR = Object.freeze({
  form : '올바른 형식이 아닙니다.',
  buyLimit : '로또는 1인당 최대 10만원 까지 구매 가능합니다.',
  moneyLack : '금액이 부족합니다. 로또 한개의 금액은 1000원 입니다.',
  unitBreak : '로또 구매 단위는 1000원 입니다.',
  luckyRange : '로또 번호는 1 부터 45 사이의 숫자입니다.',
  luckyConflict : '중복된 당첨 번호가 있습니다.',
  luckyOver : '로또 번호는 6개여야 합니다.',
  bonusConflict : '7번째 보너스 번호는 6개의 당첨 번호와 중복이 돼선 안됩니다.',
});
