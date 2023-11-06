export const LOTTO_INPUT_MESSAGE = {
  inputCost: "구입금액을 입력해 주세요. \n",
  inputWinnigNum: "당첨 번호를 입력해 주세요. \n",
  inputBonusNum: "보너스 번호를 입력해 주세요. \n",
};

export const LOTTO_OUTPUT_MESSAGE = {
  numOfLotto: "개를 구매했습니다.",
  winningStatistics: "당첨 통계\n---",
  matches: (prize) => {
    return `${PRICE[prize].count} (${PRICE[prize].prize}) - `;
  },
};

const PRICE = {
  5000: { prize: "5,000원", count: "3개 일치" },
  50000: { prize: "50,000원", count: "4개 일치" },
  1500000: { prize: "1,500,000원", count: "5개 일치" },
  30000000: { prize: "30,000,000원", count: "5개 일치, 보너스 볼 일치" },
  2000000000: { prize: "2,000,000,000원", count: "6개 일치" },
};

export const ERROR_MESSAGE = {
  isNotNumber: "[ERROR] 숫자를 입력해주세요.",
  isInvaildUnit: "[ERROR] 1000원의 배수만 입력 가능합니다.",
  isSmallNumber: "[ERROR] 1000 이상의 금액만 입력 가능합니다.",
  isOnlySixNum: "[ERROR] 6자리의 숫자만 입력 가능합니다.",
  isIncorrecRage: "[ERROR] 1부터 45까지의 숫자만 입력 가능합니다.",
  isDuplicatedNumber: "[ERROR] 중복되지 않는 숫자만 입력 가능합니다.",
};
