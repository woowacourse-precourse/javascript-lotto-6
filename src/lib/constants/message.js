export const GAME_MESSAGE = Object.freeze({
  PAYMENT_INPUT: "구입금액을 입력해 주세요.",
  LOTTO_INPUT: "당첨 번호를 입력해 주세요.",
  LOTTO_BONUS_INPUT: "보너스 번호를 입력해 주세요.",
});

export const RESULT_MESSAGE = Object.freeze({
  COUNT: "개를 구매했습니다.",
  RAFFLE_STATIC: "당첨 통계",

  printRaffleStatistic([fifth, fourth, third, second, first]) {
    return [
      `3개 일치 (5,000원) - ${fifth}개`,
      `4개 일치 (50,000원) - ${fourth}개`,
      `5개 일치 (1,500,000원) - ${third}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
      `6개 일치 (2,000,000,000원) - ${first}개`,
    ];
  },
});
