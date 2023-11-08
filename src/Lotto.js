import { LOTTO_BUSINESS_RULES } from "./constants/lotto.js";
import { ERROR_MESSAGE } from "./constants/messages.js";
import { validateNumberInRange } from "./utils/validators.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = Lotto.sortInAscendingOrder(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  has(value) {
    const numbers = this.getNumbers();

    return numbers.includes(value);
  }

  static sortInAscendingOrder(numbers) {
    return numbers.sort((prev, current) => prev - current);
  }

  #validate(numbers) {
    this.#validateLengthSix(numbers);
    Lotto.#validateNumbers(numbers);
    const { minNumber, maxNumber } = LOTTO_BUSINESS_RULES;
    Lotto.#validateNumbersInRange(numbers, minNumber, maxNumber);
    Lotto.#validateHasNoDuplicate(numbers);
  }

  #validateLengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.moreThanSixNumbers);
    }
  }

  // TODO: 추가 기능 구현
  static #validateNumbers(array) {
    if (!array.every((value) => typeof value === "number")) {
      throw new Error(ERROR_MESSAGE.hasNonNumber);
    }
  }

  static #validateNumbersInRange(numbers, minInclusive, maxInclusive) {
    numbers.forEach((number) => validateNumberInRange(number, minInclusive, maxInclusive));
  }

  static #validateHasNoDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error(ERROR_MESSAGE.hasDuplicateNumber);
    }
  }
}

export default Lotto;
