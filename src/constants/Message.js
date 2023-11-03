import { standard } from "./Standard.js";

export const ERROR = {
  DIVIDE: `[ERROR] 로또 구입 금액이 ${standard.LOTTO_PRICE}원으로 나누어 떨어지지 않습니다.`,
  LENGTH: `[ERROR] 당첨 번호는 ${standard.LOTTO_MAX_COUNT}개 입니다.`,
  DUPLICATION: "[ERROR] 중복되는 당첨 번호가 있습니다.",
  NUMBER: "[ERROR] 입력 값은 숫자여야 합니다.",
};

export const GAME = {
  INPUT_BUY_PRICE: `구입금액을 입력해 주세요.\n`,
  PRINT_BUY_COUNT: `개를 구매했습니다.\n`,
  INPUT_WINNING_NUMBERS: `당첨 번호를 입력해 주세요.\n`,
  INPUT_BONUS_NUMBERS: `보너스 번호를 입력해 주세요.\n`,
  PRINT_RESULT: "당첨 통계\n---\n",
};
