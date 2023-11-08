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

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '[ERROR] 값이 비어있습니다.',
  INVALID_NUMBER_FORMAT: "[ERROR] 숫자 형식이 아닙니다.",
  DUPLICATE_LOTTO_NUMBER: "[ERROR] 로또 번호가 중복되면 안됩니다.",
  NUMBER_OUT_OF_RANGE: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  BONUS_NUMBER_OUT_OF_RANGE: `[ERROR] 보너스 로또 번호도 1부터 45 사이의 숫자여야 합니다.`,
  NUMBER_OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_NUMBER_OUT_OF_RANGE: "[ERROR] 로또 번호는 6개를 입력해주세요.",
  INVAID_PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다."
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
  2: `5개 일치, 보너스 볼 일치 (${RANK_PRIZE[2]}) - `,
  3: `5개 일치 (${RANK_PRIZE[3]}) - `,
  4: `4개 일치 (${RANK_PRIZE[4]}) - `,
  5: `3개 일치 (${RANK_PRIZE[5]}) - `,
}

