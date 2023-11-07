import {
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
} from "./utils/lottoConstants.js";
import {
  isArrayAllIntegers,
  isArrayOfNumbersInRange,
  isArrayOfUniqueNumbers,
} from "./utils/numberArrayUtils.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateAllIntegers(numbers);
    this.#validateUniqueNumbers(numbers);
    this.#validateNumbersInRange(numbers);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateAllIntegers(numbers) {
    if (!isArrayAllIntegers(numbers)) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }
  }

  #validateUniqueNumbers(numbers) {
    if (!isArrayOfUniqueNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }

  #validateNumbersInRange(numbers) {
    if (
      !isArrayOfNumbersInRange(numbers, LOTTO_NUMBER_START, LOTTO_NUMBER_END)
    ) {
      throw new Error("[ERROR] 로또 번호는 1부터 45까지 가능합니다.");
    }
  }
}

export default Lotto;
