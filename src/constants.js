export const PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.";

export const WINNING_NUMBERS_MESSAGE = "당첨 번호를 입력해 주세요.";

export const BONUS_NUMBER_MESSAGE = "보너스 번호를 입력해 주세요.";

export const WINNING_STATISTICS = "당첨 통계";

export const MIN_NUMBER = 1;

export const MAX_NUMBER = 45;

export const COUNT_NUMBER = 6;

export const WINNING_INFOS = {
  3: "3개 일치 (5,000원) - ",
  4: "4개 일치 (50,000원) - ",
  5: "5개 일치 (1,500,000원) - ",
  "5+1": "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  6: "6개 일치 (2,000,000,000원) - "
};

export const REWARD = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000
};

export const winCheck = {
  3: 0,
  4: 0,
  5: 0,
  '5+1': 0,
  6: 0,
  total: 0
};

export const ERRORS = {
  invalidBlank: "[ERROR] 입력값이 비어있습니다.\n",
  invalidRange: "[ERROR] 1 ~ 45 사이의 번호를 입력해주세요.\n",
  invalidWinningNumbersCount: "[ERROR] 로또 번호는 6개여야 합니다.\n",
  invalidNaN: "[ERROR] 숫자가 잘못된 형식입니다.\n",
  invalidDuplicateLottoNumbers: "[ERROR] 로또 번호는 중복이 없어야 합니다.\n",
  invalidBonusNumberCount: "[ERROR] 보너스 번호는 1개만 입력해주세요.\n",
  invalidAmount: "[ERROR] 로또 구입 금액은 1,000원 단위로 입력해주세요.\n"
};