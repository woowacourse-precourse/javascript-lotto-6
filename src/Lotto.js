import { ERROR } from "./constants/messages";
import { LOTTO } from './constants/values';
import { Console } from "@woowacourse/mission-utils";

class Lotto { //예외처리 및 값 저장
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validateLength() {
    const isRightLength = this.#numbers.length < LOTTO.LEN || this.#numbers.length > LOTTO.LEN;
    try {
      if (isRightLength) throw new Error(ERROR.LOTTO_LENGTH);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isRightLength;
  }

  validateRange() {
    const isRightRange = this.#numbers.filter(v => v < LOTTO.MIN || v > LOTTO.MAX).length > 0;
    try {
      if (isRightRange) throw new Error(ERROR.LOTTO_RANGE);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isRightRange;
  }

  validateDuplicate() {
    const isDuplicate = this.#numbers.length !== new Set(this.#numbers).size;
    try {
      if (isDuplicate) throw new Error(ERROR.LOTTO_DUPILICATE);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isDuplicate;
  }

  validateNumber() {
    const isNumber = this.#numbers.filter(v => isNaN(v)).length > 0;
    try {
      if (isNumber) throw new Error(ERROR.LOTTO_DIVISION);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isNumber;
  }
}

export default Lotto;
