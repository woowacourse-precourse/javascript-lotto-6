import REGEXP from '../constants/RegExp.js';
import { SETTINGS } from '../constants/Settings.js';
import { LottoLengthError, LottoRangeError, LottoTypeError, LottoDuplicatedError } from '../error/CustomErrors.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this._validate(numbers);
    this.#numbers = numbers;
    this.#numbers.sort((a, b) => a - b);
  }

  _validate(numbers) {
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
    if (new Set([...numbers]).size !== numbers.length) {
      throw new LottoDuplicatedError(numbers);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
