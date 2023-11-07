export const MESSAGE = {
  PURCHASE_AMOUNT: `구입 금액을 입력해 주세요.`,
  LOTTO_NUMBER: `당첨 번호를 입력해 주세요.`,
  BONUS_NUMBER: `보너스 번호를 입력해 주세요.`,
  PURCHASING_TEXT: `개를 구매했습니다. \n`,
  IN_TOTAL: `당첨 통계`,
  MID_BAR_TRIO: `---`,
};

export const STATISTICS = {
  3: 0,
  4: 0,
  5: 0,
  "5+bonus": 0,
  6: 0,
  totalPrize: 0,
  profitRate: 0,
};

export const ERRORS = {
  INPUT_LOTTO_NOT_ENOUGH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INPUT_LOTTO_DUPLICATED: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INPUT_LOTTO_INVALID: "[ERROR] 올바른 로또 번호를 입력하세요.",
  INPUT_LOTTO_AMOUNT_INVALID: "[ERROR] 올바른 구입 금액을 입력하세요",
  INPUT_LOTTO_BONUS_INVALID: "[ERROR] 올바른 보너스 번호를 입력하세요.",
};

export const SCOREBOARD = {
  MATCH_3: "3개 일치 (5,000원)",
  MATCH_4: "4개 일치 (50,000원)",
  MATCH_5: "5개 일치 (1,500,000원)",
  MATCH_5_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  MATCH_6: "6개 일치 (2,000,000,000원)",
};

export const PRIZES = {
  6: 2_000_000_000,
  5: 1_500_000,
  4: 50_000,
  3: 5_000,
  "5+bonus": 30_000_000,
};
