const DEFAULT_ERROR = "[ERROR]";

export const LOTTO_PRICE = 1000;

export const INPUT_MESSAGE = {
  GAME_START: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  BUY_COUNT: "개를 구매했습니다.",
};

export const ERROR_MESSAGE = {
  MONEY: `${DEFAULT_ERROR} 로또 구매금액은 1,000원 단위로 입력해주셔야합니다.\n`,
  LOTTO_NUMBER: `${DEFAULT_ERROR} 로또 번호는 6개여야 합니다.\n`,
  NUMBER_RANGE: `${DEFAULT_ERROR} 당첨 번호는 1 ~ 45 사이의 숫자여야 합니다.\n`,
  WINNING_NUMBER: `${DEFAULT_ERROR} 당첨 번호는 중복되지 않는 숫자 6개여야 합니다.\n`,
  BONUS_NUMBER: `${DEFAULT_ERROR} 보너스 번호는 당첨번호와 다른 1개의 숫자여야합니다.`,
  BONUS_NUMBER_DUBLE_CHECK: `${DEFAULT_ERROR} 보너스 번호는 당첨번호와 다른 번호여야합니다.`,
};

export const RESULT_MESSAGE = {
  GUAID: "\n당첨 통계 \n---",
  SIX: "6개 일치 (2,000,000,000원) - ($count$)개",
  FIVE_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ($count$)개",
  FIVE: "5개 일치 (1,500,000원) - ($count$)개",
  FOUR: "4개 일치 (50,000원) - ($count$)개",
  THREE: "3개 일치 (5,000원) - ($count$)개",
  REVENUE: "총 수익률은 ($number$)%입니다.\n",
};
