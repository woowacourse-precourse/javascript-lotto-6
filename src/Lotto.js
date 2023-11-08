import MESSAGE from './constants/message.js';
import OPTION from './constants/option.js';
import InputError from './error/InputError.js';
import { numbersInRange } from './utils/number.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (
      !numbersInRange(
        numbers,
        OPTION.lotto.minLottoNumber,
        OPTION.lotto.maxLottoNumber,
      )
    ) {
      throw new InputError(MESSAGE.error.lottoNumbersMustBeInRange);
    }
    if (numbers.length !== OPTION.lotto.lottoLength) {
      throw new InputError(MESSAGE.error.lottoNumbersMustBeLottoLength);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new InputError(MESSAGE.error.lottoNumbersMustBeUnique);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
