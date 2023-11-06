export const NUMBER_REGEX = /^\d+$/;
export const MAX_LOTTO_LENGTH = 6;
export const MAX_LOTTO_NUMBER = 45;
export const MIN_LOTTO_NUMBER = 1;
export const LOTTO_PRICE = 1000;
export const MIN_LOTTO_PRICE = 1000;

export const GAME_MESSAGES = {
  ENTER_TICKET_MONEY: "구입금액을 입력해 주세요.\n",
  PURCHASE_TICKET_COUNT: "개를 구매했습니다.",
  WIN_LOTTO: "당첨 번호를 입력해 주세요.\n",
  BOUNS_LOTTO: "보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "당첨 통계\n",
  NEW_LINE: "---",
  WINNING_RESULT: [
    "6개 일치 (2,000,000,000원)",
    "5개 일치, 보너스 볼 일치 (30,000,000원)",
    "5개 일치 (1,500,000원)",
    "4개 일치 (50,000원)",
    "3개 일치 (5,000원)",
  ],
  TOTAL_PROFITABILITY: "총 수익률은 %s입니다.",
};

export const ERROR_MESSAGES = {
  EMPTY_INPUT: "[ERROR] 입력값이 존재하지 않습니다.",
  NOT_NUMBER: "[ERROR] 반드시 숫자만 입력해야 합니다.",
  PURCHASE_MONEY_INVALID: "[ERROR] 로또 구매 금액은 1000원 이상이어야 합니다.",
  PURCHASE_MONEY_NOT_DIVISIBLE: "[ERROR] 로또 구매 금액은 1000원 단위어야 합니다.",
  LOTTO_SIZE_INVALID: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATION_LOTTO_NUMBER: "[ERROR] 중복된 숫자가 포함되어 있습니다.",
  BONUS_NUMBER_INVALID: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다",
};
