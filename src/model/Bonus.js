import { ERROR_MESSAGE } from "../constants/errors.js";
import { LOTTO_NUMBERS } from "../constants/numbers.js";
import { stringToNumber } from "../utils/conversion.js";

class Bonus {
  // Bonus 예시: "3" 과 같은 문자열
  #string;

  constructor(string) {
    this.#string = string;
    this.#isEmpty(string);
    this.#isNotNumber(string);
    this.#isNumberInRange(string);
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

  #isNumberInRange(string) {
    const number = stringToNumber(string);
    if (!(LOTTO_NUMBERS.minimum <= number && number <= LOTTO_NUMBERS.maximum)) {
      throw new Error(ERROR_MESSAGE.outOfRange);
    }
  }
}

export default Bonus;
