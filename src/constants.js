export const GAME_MESSAGE = {
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  BUY_COUNT: "개를 구매했습니다.",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

export const ERROR_MESSAGE = {
  INVAILD_INPUT_MONEY:
    "[ERROR] 로또 구입 가격은 1000원 단위로 입력해야 합니다.",
  LOTTO_NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_NUMBERS_DUPLICATE: "[ERROR] 중복된 숫자를 가질 수 없습니다.",
  LOTTO_NUMBERS_RANGE: "[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_NOT_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  BONUS_NUMBER_RANGE: "[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATE:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
};

export const GAME_RESULT = {
  RESULT: "\n당첨 통계",
  DIVIDER: "---",
  MATCH_3: "3개 일치 (5,000원) - ",
  MATCH_4: "4개 일치 (50,000원) - ",
  MATCH_5: "5개 일치 (1,500,000원) - ",
  MATCH_5_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  MATCH_6: "6개 일치 (2,000,000,000원) - ",
  PROFIT: "총 수익률은 ",
};
