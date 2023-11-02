import { MONEY_UNIT, LOTTO } from "./constants.js";

export const ERROR_MESSAGE = {
  notDivideBy1000: `[ERROR] 로또 구입 금액은 ${MONEY_UNIT}원 단위여야 합니다.`,
  notNumber: "[ERROR] 로또 번호는 숫자여야 합니다.",
  notSixLength: `[ERROR] 로또 번호는 ${LOTTO.length}개여야 합니다.`,
};