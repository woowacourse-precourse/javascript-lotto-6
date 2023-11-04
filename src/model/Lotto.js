import { ERROR, LOTTO, REGEX } from '../constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.length);
    }

    if (new Set([...numbers]).size !== numbers.length) {
      throw new Error(ERROR.duplicated);
    }

    numbers.forEach(this.#validateEachNumber);
  }

  #validateEachNumber(number) {
    if (number > LOTTO.maxRange || number < LOTTO.minRange) {
      throw new Error(ERROR.range);
    }

    if (!REGEX.isNumber.test(number)) {
      throw new Error(ERROR.numberOnly);
    }
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
