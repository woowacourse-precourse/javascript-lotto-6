import Utils from '../utils/Utils.js';
import SETTINGS from '../constants/Settings.js';
import REGEXP from '../constants/RegExp.js';
import {
  LottoTypeError,
  LottoDuplicatedError,
  LottoLengthError,
  LottoRangeError,
} from '../error/CustomErrors.js';

export default class Numbers {
  #numbers;

  constructor(numbers) {
    const numberArray = Utils.stringToNumberArray(numbers);
    this.#validate(numberArray);
    numberArray.sort((a, b) => a - b);
    this.#numbers = numberArray;
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
    if (new Set([...numbers]).size !== numbers.length) {
      throw new LottoDuplicatedError(numbers);
    }
  }

  get() {
    return this.#numbers;
  }
}
