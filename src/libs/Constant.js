export const LOTTO = {
  MIN: 1,
  MAX: 45,
  NUMBERS_COUNT: 6,
};

export const GAME_MESSAGE = {
  MONEY: "구입금액을 입력해주세요.\n",
  WINNING_NUM: "\n당첨 번호를 입력해주세요.\n",
  BONUS_NUM: "\n보너스 번호를 입력해주세요\n",
  STATIC: "\n당첨 통계\n---",
};

export const ERROR_MESSAGE = {
  NUMBER: "[ERROR] 숫자만 입력할 수 있습니다",
  MIN_MONEY: "[ERROR] 최소 구입 금액은 1000원입니다.",
  DIVISION: "[ERROR] 1000원 단위의 로또를 구입해주세요.",
  NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE: "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.",
  RANGE: "[ERROR] 로또 번호의 범위는 1~45입니다.",
  ALREADY_INCLUDE: "[ERROR] 보너스 번호가 이미 당첨 번호에 포함되어 있습니다.",
  BONUS_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  BONUS_RANGE: "[ERROR] 보너스 번호의 범위는 1~45입니다.",
};

export const WINNING_MESSAGE = {
  SIX: "6개 일치 (2,000,000,000원)",
  FIVE_PLUS_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  FIVE: "5개 일치 (1,500,000원)",
  FOURTH: "4개 일치 (50,000원)",
  THREE: "3개 일치 (5,000원)",
};

export const PURCHASE_MONEY = "구입금액";
export const LOTTO_NUMBER = "로또 번호";
export const WINNING_NUMBER = "당첨 번호";
export const BONUS_NUMBER = "보너스 번호";
