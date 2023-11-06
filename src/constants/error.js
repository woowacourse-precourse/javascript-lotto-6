import { LOTTO } from "./constants.js";

export const ERROR_MESSAGE = {
  notDivideByLottoPrice: `[ERROR] 로또 구입 금액은 ${LOTTO.price}원 단위여야 합니다.`,
  notNumber: {
    money: "[ERROR] 로또 구입 금액은 숫자여야 합니다.",
    number: "[ERROR] 로또 번호는 숫자여야 합니다."
  },
  notSixLength: `[ERROR] 로또 번호는 ${LOTTO.length}개여야 합니다.`,
  isRepeat: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  notValidLotto: `[ERROR] 로또 번호는 ${LOTTO.min} ~ ${LOTTO.max} 사이여야 합니다.`,
  isBonusInLuckyNumbers: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
};