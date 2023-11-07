import { ERROR, LOTTO } from './Constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.LOTTO_LENGHT) {
      throw new Error(ERROR.NOT_LOTTO_LENGTH);
    }

    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.size) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }

    for (const number of numbers) {
      if (
        LOTTO.REG_NUMBER.test(number) ||
        Number(number) > 45 ||
        Number(number) < 1
      ) {
        throw new Error(ERROR.NOT_LOTTO_RANGE);
      }
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
