export const LOTTO_INPUT_MESSAGE = {
  inputCost: "구입금액을 입력해 주세요. \n",
  inputWinnigNum: "당첨 번호를 입력해 주세요. \n",
  inputBonusNum: "보너스 번호를 입력해 주세요. \n",
};

export const LOTTO_OUTPUT_MESSAGE = {
  numOfLotto: "개를 구매했습니다.",
  winningStatistics: "당첨 통계\n---",
  matches: (count) => {
    return `${count}개 일치 (${PRICE[count]}) -`;
  },
};

const PRICE = {
  3: "5,000원",
  4: "50,000원",
  5: "1,500,000원",
  6: "2,000,000,000원",
};

export const ERROR_MESSAGE = {
  isNotwNumber: "[ERROR] 숫자를 입력해주세요.",
  isInvaildUnit: "[ERROR] 1000원의 배수만 입력 가능합니다.",
  isSmallNumber: "[ERROR] 1000 이상의 금액만 입력 가능합니다.",
  isOnlySixNum: "[ERROR] 6자리의 숫자만 입력 가능합니다.",
  isIncorrecRage: "[ERROR] 1부터 45까지의 숫자만 입력 가능합니다.",
};
