import { LOTTO } from './constants/lotto';
import { ERROR_MESSAGE } from './constants/message';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.lottoLength);
    }

    if (new Set(numbers).size !== LOTTO.length) {
      throw new Error(ERROR_MESSAGE.existDuplicateNumber);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
