import { LottoNumbersError } from "./errors/index.js";
import { LOTTO_NUMBER_COUNT, LOTTO_NUMBER_RANGE } from "./Lotto.js";

export const ERROR_MESSAGES = Object.freeze({
  NUMBER_NOT_IN_RANGE: `로또 번호는 1~45 사이의 숫자여야 합니다.`,
  LENGTH_NOT_MATCHED: `로또 번호는 6개여야 합니다.`,
  DUPLICATED_NUMBERS: "로또 번호는 중복될 수 없습니다.",
});

class LottoValidation {
  static validate(numbers) {
    if (
      !this.#isNumbersInRange(
        numbers,
        LOTTO_NUMBER_RANGE.MIN,
        LOTTO_NUMBER_RANGE.MAX
      )
    ) {
      throw new LottoNumbersError(ERROR_MESSAGES.NUMBER_NOT_IN_RANGE);
    }

    if (!this.#isLengthMatch(numbers, LOTTO_NUMBER_COUNT)) {
      throw new LottoNumbersError(ERROR_MESSAGES.LENGTH_NOT_MATCHED);
    }

    if (!this.#hasUniqueElements(numbers)) {
      throw new LottoNumbersError(ERROR_MESSAGES.DUPLICATED_NUMBERS);
    }
  }

  static #isNumbersInRange(numbers, min, max) {
    return numbers.every(
      (number) => Number.isInteger(number) && number >= min && number <= max
    );
  }

  static #isLengthMatch(array, length) {
    return array.length === length;
  }

  static #hasUniqueElements(array) {
    return array.length === new Set(array).size;
  }
}

export default LottoValidation;
