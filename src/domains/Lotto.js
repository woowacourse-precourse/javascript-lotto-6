import REGEXP from '../constants/RegExp.js';
import { SETTINGS } from '../constants/Settings.js';
import { LottoLengthError, LottoRangeError, LottoTypeError } from '../error/Errors.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== SETTINGS.lottoLength) {
      throw new LottoLengthError(numbers);
    }
    numbers.forEach(number => {
      if (!REGEXP.eachNumber.test(number)) {
        throw new LottoTypeError(numbers);
      }
      if (Number(number) < SETTINGS.minimumLottoRange || Number(number) > SETTINGS.maximumLottoRange) {
        throw new LottoRangeError(numbers);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
