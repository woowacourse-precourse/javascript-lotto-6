import { ERROR } from '../messages';

class Lotto {
  #numbers;

  // numbers는 숫자 배열
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.COUNT);
    }

    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(ERROR.LOTTO.NOT_INTEGER);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR.LOTTO.DUPLICATED);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR.LOTTO.OUT_OF_RANGE);
    }
  }
}

export default Lotto;
