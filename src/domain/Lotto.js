import { ERROR, LOTTO } from '../Constant.js';
import CustomError from '../CustomError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new CustomError(ERROR.INVALID_LOTTO_NUMBER_COUNT);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError(ERROR.DUPLICATED_LOTTO_NUMBERS);
    }
    if (!numbers.every(this.#isValidLottoNumber)) {
      throw new CustomError(ERROR.INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  #isValidLottoNumber(num) {
    return num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER;
  }
}

export default Lotto;
