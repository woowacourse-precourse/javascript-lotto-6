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
    Lotto.#validateNumbersInRange(numbers, 1, 45);
    Lotto.#validateHasNoDuplicate(numbers);
  }

  #validateLengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  static #validateNumbersInRange(numbers, minInclusive, maxInclusive) {
    numbers.forEach((number) => validateNumberInRange(number, minInclusive, maxInclusive));
  }

  static #validateHasNoDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error("[ERROR] 로또에 중복된 값이 포함되어 있습니다.");
    }
  }
}

export default Lotto;
