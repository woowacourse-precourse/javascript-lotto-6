import { ERROR, LOTTO } from '../Constant.js';
import CustomError from '../CustomError.js';

class Lotto {
  _numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this._numbers = numbers;
  }

  getNumbers() {
    return this._numbers;
  }

  contain(x) {
    return this._numbers.indexOf(x) !== -1;
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
