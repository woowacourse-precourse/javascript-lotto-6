export const LOTTO_INPUT_MESSAGE = {
  inputCost: "구입금액을 입력해 주세요. \n",
  inputWinnigNum: "당첨 번호를 입력해 주세요. \n",
  inputBonusNum: "보너스 번호를 입력해 주세요. \n",
};

export const LOTTO_OUTPUT_MESSAGE = {
  numOfLotto: "개를 구매했습니다.",
  winningStatistics: "당첨 통계\n---",
};

export const PRICE = [
  { prize: 5000, count: 3, message: "3개 일치 (5,000원) - ", isBonus: false },
  { prize: 50000, count: 4, message: "4개 일치 (50,000원) - ", isBonus: false },
  { prize: 1500000, count: 5, message: "5개 일치 (1,500,000원) - ", isBonus: false },
  {
    prize: 30000000,
    count: "bonus",
    message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    isBonus: true,
  },
  { prize: 2000000000, count: 6, message: "6개 일치 (2,000,000,000원) - ", isBonus: false },
];

export const ERROR_MESSAGE = {
  isNotNumber: "[ERROR] 숫자를 입력해주세요.",
  isInvaildUnit: "[ERROR] 1000원의 배수만 입력 가능합니다.",
  isSmallCost: "[ERROR] 1000 이상의 금액만 입력 가능합니다.",
  isOnlySixNum: "[ERROR] 6자리의 숫자만 입력 가능합니다.",
  isIncorrecRage: "[ERROR] 1부터 45까지의 숫자만 입력 가능합니다.",
  isDuplicatedNumber: "[ERROR] 중복되지 않는 숫자만 입력 가능합니다.",
};
