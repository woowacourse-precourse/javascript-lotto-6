export const RANGE_MIN = 1;
export const RANGE_MAX = 45;
export const LOTTO_LENGTH = 6;

export const GAME_MESSAGE = {
  MONEY: "구입금액을 입력해주세요.\n",
  WINNING_NUM: "당첨 번호를 입력해주세요.\n",
  BONUS_NUM: "보너스 번호를 입력해주세요\n",
  STATIC: "당첨 통계\n---",
};

export const ERROR_MESSAGE = {
  NUMBER: "[ERROR] 숫자만 입력할 수 있습니다",
  MIN_MONEY: "[ERROR] 최소 구입 금액은 1000원입니다.",
  DIVISION: "[ERROR] 1000원 단위의 로또를 구입해주세요.",
  NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE: "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.",
  RANGE: "[ERROR] 로또 번호의 범위는 1~45입니다.",
  ALREADY_INCLUDE: "[ERROR] 보너스 번호가 이미 당첨 번호에 포함되어 있습니다.",
};
