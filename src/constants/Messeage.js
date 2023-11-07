import { LOTTO_STASTICS } from "./BusinessNumber.js";

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

export const LOTTO_STATISTICS_RESULT = Object.freeze({
  fifthResult(number) {
    return `3개 일치 (${LOTTO_STASTICS.fifthPrize.toLocaleString()}원) - ${number}개`;
  },
  fourthResult(number) {
    return `4개 일치 (${LOTTO_STASTICS.fourthPrize.toLocaleString()}원) - ${number}개`;
  },
  thirdResult(number) {
    return `5개 일치 (${LOTTO_STASTICS.thirdPrize.toLocaleString()}원) - ${number}개`;
  },
  secondResult(number) {
    return `5개 일치, 보너스 볼 일치 (${LOTTO_STASTICS.secondPrize.toLocaleString()}원) - ${number}개`;
  },
  firstResult(number) {
    return `6개 일치 (${LOTTO_STASTICS.firstPrize.toLocaleString()}원) - ${number}개`;
  },
  earningRate(string) {
    return `총 수익률은 ${string}%입니다.`;
  },
});
