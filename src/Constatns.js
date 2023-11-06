export const MAX_LOTTO_LENGTH = 6;
export const MAX_LOTTO_NUMBER = 45;
export const MIN_LOTTO_NUMBER = 1;
export const LOTTO_PRICE = 1000;
export const MIN_LOTTO_PRICE = 1000;

export const RANKS = {
  MAX_RANK_LENGTH: 5,
  RANK_FIRST: 1,
  RANK_SECOND: 2,
  RANK_THIRD: 3,
  RANK_FOURTH: 4,
  RANK_FIFTH: 5,
  RANK_PRICE: [5000, 50000, 30000000, 1500000, 2000000000],
};

export const GAME_MESSAGES = {
  ENTER_TICKET_MONEY: "구입금액을 입력해 주세요.\n",
  PURCHASE_TICKET_COUNT: "개를 구매했습니다.",
  WIN_LOTTO: "\n당첨 번호를 입력해 주세요.\n",
  BOUNS_LOTTO: "\n보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "\n당첨 통계",
  NEW_LINE: "---",
  WINNING_RESULT: [
    "3개 일치 (5,000원) - %s개",
    "4개 일치 (50,000원) - %s개",
    "5개 일치, 보너스 볼 일치 (30,000,000원) - %s개",
    "5개 일치 (1,500,000원) - %s개",
    "6개 일치 (2,000,000,000원) - %s개",
  ],
  TOTAL_PROFITABILITY: "총 수익률은 %s%입니다.",
};

export const ERROR_MESSAGES = {
  EMPTY_INPUT: "[ERROR] 입력값이 존재하지 않습니다.",
  NOT_NUMBER: "[ERROR] 반드시 숫자만 입력해야 합니다.",
  PURCHASE_MONEY_INVALID: "[ERROR] 로또 구매 금액은 1000원 이상이어야 합니다.",
  PURCHASE_MONEY_NOT_DIVISIBLE: "[ERROR] 로또 구매 금액은 1000원 단위어야 합니다.",
  LOTTO_RANGE_OVER: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATION_NUMBER: "[ERROR] 중복된 번호가 있습니다.",
  NUMBER_RANGE_OVER: "[ERROR] 번호는 1부터 45 사이의 숫자여야 합니다",
};
