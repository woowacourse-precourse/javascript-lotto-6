import { ERROR_MESSAGE } from "../constants/errors.js";
import { SEPARATOR } from "../constants/messages.js";
import { COUNT, LOTTO_NUMBERS } from "../constants/numbers.js";
import { divideIntoCommas, stringToNumber } from "../utils/conversion.js";

class Winning {
  // Winning 예시: "1,2,3,4,5,6" 과 같은 문자열
  #string;

  constructor(string) {
    this.#string = string;
    this.#isEmpty(string);
    this.#mismatchedCount(string);
    this.#isArrayHasEmpty(string);
    this.#isNotAllNumbers(string);
    this.#isDuplicated(string);
    this.#isNumberInRange(string);
  }

  #isEmpty(string) {
    // 입력값이 없거나 공백만 있을 경우
    if (!string.trim().length) {
      throw new Error(ERROR_MESSAGE.isEmpty);
    }
  }

  #mismatchedCount(string) {
    // ,를 기준으로 나누었을 때 길이가 COUNT.winningNumbers가 아닌 경우
    if (divideIntoCommas(string).length !== COUNT.winningNumbers) {
      throw new Error(ERROR_MESSAGE.winningCount);
    }
  }

  #isArrayHasEmpty(string) {
    // 배열이 되었을 때 공백이 포함되는 경우
    const stringArr = divideIntoCommas(string);
    for (const string of stringArr) {
      if (!string.trim().length) {
        throw new Error(ERROR_MESSAGE.hasEmpty);
      }
    }
  }

  #isNotAllNumbers(string) {
    // 배열에 다른 타입의 값이 들어있는지 검사
    const stringArr = divideIntoCommas(string);
    for (const string of stringArr) {
      const number = stringToNumber(string.trim()); // 공백을 제거하고 숫자로 변환
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGE.arrHasTypeDismatching);
      }
    }
  }

  #isDuplicated(string) {
    // 각 숫자들이 중복되었을 경우
    let checkDuplicateSet = new Set();
    const numbers = divideIntoCommas(string);
    for (const number of numbers) {
      if (checkDuplicateSet.has(number)) {
        throw new Error(ERROR_MESSAGE.isNumberDuplicated);
      }
      checkDuplicateSet.add(number);
    }
  }

  #isNumberInRange(string) {
    const numbers = divideIntoCommas(string);
    for (const number of numbers) {
      if (
        !(LOTTO_NUMBERS.minimum <= number && number <= LOTTO_NUMBERS.maximum)
      ) {
        throw new Error(ERROR_MESSAGE.outOfRange);
      }
    }
  }
}

export default Winning;
