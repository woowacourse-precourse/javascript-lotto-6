export const GAME_MESSAGES = {
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요. ",
  CONFIRM_PURCHASED_LOTTOS_AMOUNT: "개를 구매했습니다.",
  ENTER_WINNING_NUMBERS: "당첨 번호를 입력해 주세요. ",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요. ",
  TOTAL_PRIZE_RATE: (winningRates) => `총 수익률은 ${winningRates}%입니다.`,
  STATICS_HEADER: "당첨 통계",
  DIVIDER: "---------",
  MESSSAGE_SUFFIX: "개"
}

export const RANK_PRIZE = {
  1: '2,000,000,000원',
  2: '30,000,000원',
  3: '1,500,000원',
  4: '50,000원',
  5: '5,000원',
}

export const RANK_MESSAGES = {
  1: `6개 일치 (${RANK_PRIZE[1]}) - `,
  2: `5개 일치 + 보너스볼 (${RANK_PRIZE[2]}) - `,
  3: `5개 일치 (${RANK_PRIZE[3]}) - `,
  4: `4개 일치 (${RANK_PRIZE[4]}) - `,
  5: `3개 일치 (${RANK_PRIZE[5]}) - `,
}
