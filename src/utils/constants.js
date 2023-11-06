const USER_PROMPT = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  SHOW_LOTTO_COUNT(count) {
    return `\n${count}개를 구매했습니다.`;
  },
  WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const NUMBER = {
  DIVISOR: 1000,
  MIN: 1,
  MAX: 45,
  COUNT: 6,
  PERCENTAGE: 100,
};

const ERROR = {
  INVALID_AMOUNT: "[ERROR] 입력한 금액은 1000원 단위여야 합니다.",
  INVALID_WINNING_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_WINNING_NUMBER_RANGE:
    "[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.",
  DUPLICATED_WINNING_NUMBER: "[ERROR] 당첨 번호는 중복될 수 없습니다.",
  INVALID_BONUS_NUMBER_RANGE:
    "[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.",
  DUPLICATED_BONUS_NUMBER:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
};

const RESULT = {
  STATISTICS: "\n당첨 통계\n---",
  THREE: "3개 일치 (5,000원)",
  FOUR: "4개 일치 (50,000원)",
  FIVE: "5개 일치 (1,500,000원)",
  FIVE_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  SIX: "6개 일치 (2,000,000,000원)",
};

export { USER_PROMPT, NUMBER, ERROR, RESULT };
