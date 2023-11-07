import { ERROR_MESSAGE } from "../constants/errors.js";
import { stringToNumber } from "../utils/conversion.js";

class Amount {
  #string;

  constructor(string) {
    this.#string = string;
    this.#isEmpty(string);
    this.#isNotNumber(string);
    this.#isNotDividedByAmount(string);
  }

  #isEmpty(string) {
    // 입력값이 없거나 공백만 있을 경우
    if (!string.trim().length) {
      throw new Error(ERROR_MESSAGE.isEmpty);
    }
  }

  #isNotNumber(string) {
    // 숫자인지 체크
    if (isNaN(stringToNumber(string))) {
      throw new Error(ERROR_MESSAGE.typeDismatching);
    }
  }

  #isNotDividedByAmount(string) {
    // 잔돈이 존재하는경우를 체크
    if (stringToNumber(string) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.hasChanges);
    }
  }
}

export default Amount;
