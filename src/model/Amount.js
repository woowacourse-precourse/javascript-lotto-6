import { ERROR_MESSAGE } from "../constants/errors.js";

class Amount {
  #string;

  constructor(string) {
    this.#string = string;
    this.#isEmpty(string);
    this.#isNotNumber(string);
  }

  #isEmpty(string) {
    // 입력값이 없거나 공백만 있을 경우
    if (!string.trim().length) {
      throw new Error(ERROR_MESSAGE.isEmpty);
    }
  }

  #isNotNumber(string) {
    // 숫자인지 체크
    if (isNaN(Number(string))) {
      throw new Error(ERROR_MESSAGE.typeDismatching);
    }
  }
}

export default Amount;
