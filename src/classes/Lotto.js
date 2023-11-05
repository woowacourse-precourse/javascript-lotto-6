import { ERROR_MESSAGE } from "../constant/lottoConstants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      this.#isNumber(number);

      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
      }
    });

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LESS_LOTTO_NUMBERS);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_HAVE_DUPLICATE);
    }
  }

  #isNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR_MESSAGE.MUST_BE_NUMBER);
    }
  }
}

export default Lotto;
