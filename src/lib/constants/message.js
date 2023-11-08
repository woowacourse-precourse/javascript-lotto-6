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

  printProfit(profit) {
    return `총 수익률은 ${profit}%입니다.`;
  },
});

export const ERROR_MESSAGE = Object.freeze({
  INPUT_EXIST_ERROR: "[ERROR] 값을 입력해주세요.",
  INPUT_NUMBER_LENGTH_ERROR: "[ERROR] 6개의 숫자를 입력하세요.",
  INPUT_PAYMENT_ERROR: "[ERROR] 1,000원 단위의 숫자 1개를 입력하세요.",
  INPUT_NUMBER_IS_NOT_DISTINCT_ERROR:
    "[ERROR] 6개의 서로 다른 숫자를 입력하세요.",
  INPUT_DATA_TYPE_ERROR: "[ERROR] 숫자만 입력하세요.",
  POSITIVE_NUMBER_ERROR: "[ERROR] 양수만 입력하세요.",
  LOTTO_NUMBER_RANGE_ERROR: "[ERROR] 1에서 45사이의 숫자만 입력하세요.",
});
