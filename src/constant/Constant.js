export const MESSAGE = {
  PRICE_INPUT: "구입금액을 입력해 주세요.\n",
  BOUGHT_LOTTOS: "개를 구매했습니다.",
  LOTTO_INPUT: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_INPUT: "\n보너스 번호를 입력해 주세요.\n",
  LOTTO_RESULT_PREFIX: "\n당첨 통계\n---",
  LOTTO_RESULT_THREE: "3개 일치 (5,000원) - ",
  LOTTO_RESULT_FOUR: "4개 일치 (50,000원) - ",
  LOTTO_RESULT_FIVE: "5개 일치 (1,500,000원) - ",
  LOTTO_RESULT_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  LOTTO_RESULT_SIX: "6개 일치 (2,000,000,000원) - ",
  LOTTO_RESULT_SUFFIX: "개",
  EARNING_RATE_PREFIX: "총 수익률은 ",
  EARNING_RATE_SUFFIX: "%입니다."
};

export const SPLIT_SEPARATOR = ",";
export const JOIN_SEPARATOR = ", ";
export const JOIN_PREFIX = "[";
export const JOIN_SUFFIX = "]";
export const NEW_LINE = "\n";
export const UNIT = 1000;
export const RANGE_START = 1;
export const RANGE_END = 45;
export const BALL_NUMBERS = 6;
export const BONUS_MATCHES = 5;
export const RESULT_MATCHES = 5;
export const INITIAL_RESULT_VALUE = 0;
export const PERCENT = 100;
export const PRECISION_POINT = 1;

export const RESULT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  BONUS: 7,
  SIX: 6
}

export const MATCH = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  BONUS: 30000000,
  SIX: 2000000000
};

export const ERROR = {
  PRICE_NOT_THOUSAND: "[ERROR] 로또 구입 금액은 1,000원 단위로 입력해 주세요.",
  PRICE_NULL: "[ERROR] 로또 구입 금액을 입력해 주세요.",
  PRICE_NOT_NUMBER: "[ERROR] 로또 구입 금액은 숫자로 입력해 주세요.",
  LOTTO_BAD_FORMAT: "[ERROR] 로또 번호는 쉼표(,)로 구분된 숫자 6개를 입력해 주세요.",
  LOTTO_NOT_UNIQUE: "[ERROR] 로또 번호는 서로 다른 숫자를 입력해 주세요.",
  LOTTO_BAD_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.",
  BONUS_NOT_NUMBER: "[ERROR] 보너스 번호는 숫자로 입력해 주세요.",
  BONUS_BAD_RANGE: "[ERROR] 보너스 번호는 1부터 45사이의 숫자입니다."
}
