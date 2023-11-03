import REGEXP from '../constants/RegExp.js';
import { SETTINGS } from '../constants/Settings.js';
import { LottoRangeError, LottoTypeError, LottoLengthError, LottoDuplicatedError } from '../error/Errors.js';
import Utils from '../utils/Utils.js';

class WinningLotto {
  #numbers;
  #bonus;

  setNumbers(numbers) {
    const numberArray = Utils.stringArrayToNumberArray(numbers)
    this.#validateNumbers(numberArray);
    this.#numbers = numberArray;
  }

  #validateNumbers(numbers) {
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

  setBonus(bonus) {
    this.#validateBonus(bonus);
    this.#bonus = bonus;
  }

  #validateBonus(bonus) {
    if (!REGEXP.eachNumber.test(bonus)) {
      throw new Error('[ERROR]')
    }
  }
}

export default WinningLotto;
