import { LOTTO_CONSTANT } from "./game.js";

export const LOTTO_ERROR_MSG = Object.freeze({
  LENGTH_ERR: `로또 번호는 ${LOTTO_CONSTANT.SIZE}개여야 합니다.`,
  DUPLICATION_ERR: "로또 번호가 중복되었습니다.",
  NOT_DIGIT_ERR: "숫자가 아닌 문자가 있습니다.",
  RANGE_ERR: `로또 번호는 ${LOTTO_CONSTANT.RANGE.MIN}부터 ${LOTTO_CONSTANT.RANGE.MAX} 사이의 숫자여야 합니다.`,
  DIVIDE_ERR: "숫자가 잘못된 형식입니다.",
});
