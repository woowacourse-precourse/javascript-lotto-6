export const LOTTO = {
  PRICE: 1000,
  START_NUM: 1,
  LAST_NUM: 45,
  WINNING_NUMBERS_COUNT: 6,
  PRIZES: [5000, 50000, 1500000, 30000000, 2000000000],
  REQUIREMENTS: [3, 4, 5, 5, 6],
};

export const MESSAGE = {
  INPUT: {
    WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
    MONEY: "구입금액을 입력해 주세요.\n",
  },
  ERROR: {
    NO_VALID_MONEY: `[ERROR] ${LOTTO.PRICE} 단위의 숫자를 입력하셔야 합니다.`,
    HAS_SAME_NUMBER: "[ERROR] 겹치는 숫자가 있습니다.",
    NO_VALID_RANGE: "[ERROR] 1~45 사이로 입력해주세요.",
    NO_NUMBER: "[ERROR] 숫자를 입력해 주세요",
    NO_INPUT: "[ERROR]아무것도 입력하시지 않았습니다.",
    NO_VALID_COUNT: (count) =>
      `[ERROR] 로또 번호는 ${count}개를 입력하셔야 합니다.`,
  },
};
