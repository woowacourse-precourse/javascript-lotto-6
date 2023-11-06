const INPUT = {
  PURCHASE_AMOUNT: "구입금액을 입력해주세요.",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const OUTPUT = {
  PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.`,
  LOTTO_NUMBER: (lotto) => `[${lotto.join(", ")}]`,
  RESULT_HEADER: "당첨 통계\n___",
  RESULT: (result) => {
    const { rank, count, prize } = result;
    return `${rank}(${prize}원)- ${count}개`;
  },
  PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
};

const ERROR = {
  NOT_DIVIDED_BY_1000: "[ERROR] 1000원 단위로만 구입 가능합니다.",
  NOT_POSITIVE_NUMBER: "[ERROR] 양의 정수만 입력 가능합니다.",
  NOT_ZERO: "[ERROR] 0은 입력할 수 없습니다.",

  NOT_IN_RANGE: "[ERROR] 1 ~ 45 사이의 숫자만 입력 가능합니다.",
  DUPLICATED_NUMBER: "[ERROR] 중복된 숫자가 있습니다.",
  NOT_SIX_NUMBERS: "[ERROR] 6개의 숫자를 입력해주세요.",

  NOT_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
};

Object.freeze(INPUT, OUTPUT, ERROR);
export default { INPUT, OUTPUT, ERROR };
