import { MissionUtils } from "@woowacourse/mission-utils";

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const WINNING_NUMBER_COMMENT = "\n당첨 번호를 입력해 주세요.";
const BONUS_NUMBER_COMMENT = "\n보너스 번호를 입력해 주세요.";
const LOTTO_RESULT_COMMENT = "\n당첨 통계\n---";

export const comments = {
  inputNumberComment() {
    let comment = PURCASE_COMMENT;
    MissionUtils.Console.print(comment);
  },

  winningNumberComment() {
    let comment = WINNING_NUMBER_COMMENT;
    MissionUtils.Console.print(comment);
  },

  bonusNumberComment() {
    let comment = BONUS_NUMBER_COMMENT;
    MissionUtils.Console.print(comment);
  },

  lottoResultComment() {
    let comment = LOTTO_RESULT_COMMENT;
    MissionUtils.Console.print(comment);
  }
}

export const errorComments = {
  counter : [
    "[ERROR] 숫자가 잘못된 형식입니다.",
    "[ERROR] 구입 금액은 1000원 단위로 입력 가능합니다."
  ],

  winning : [
    "[ERROR] 당첨 번호는 6개여야 합니다.", 
    "[ERROR] 숫자가 잘못된 형식입니다.",
    "[ERROR] 로또 번호가 중복되었습니다.",
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
  ],

  bonus : [
    "[ERROR] 숫자가 잘못된 형식입니다.",
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    "[ERROR] 보너스 번호가 중복되었습니다."
  ],

  lotto : [
    "[ERROR] 로또 번호는 6개여야 합니다.",
    "[ERROR] 로또 번호가 중복되었습니다.",
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
  ]
}