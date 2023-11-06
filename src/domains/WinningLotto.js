import REGEXP from '../constants/RegExp.js';
import SETTINGS from '../constants/Settings.js';
import Utils from '../utils/Utils.js';
import {
  LottoRangeError,
  LottoTypeError,
  LottoLengthError,
  LottoDuplicatedError,
  BonusTypeError,
  BonusRangeError,
  BonusIncludedError
} from '../error/CustomErrors.js';

class WinningLotto {
  #numbers;
  #bonus;

  setNumbers(numbers) {
    const numberArray = Utils.stringToNumberArray(numbers);
    this.#validateNumbers(numberArray);
    numberArray.sort((a, b) => a - b);
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
    this.#validate(bonus);
    this.#bonus = Number(bonus);
  }

  #validate(bonus) {
    if (!REGEXP.eachNumber.test(bonus)) {
      throw new BonusTypeError(bonus);
    }
    if (Number(bonus) < SETTINGS.minimumLottoRange || Number(bonus) > SETTINGS.maximumLottoRange) {
      throw new BonusRangeError(bonus);
    }
    if (this.#numbers.includes(Number(bonus))) {
      throw new BonusIncludedError(bonus);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonus() {
    return this.#bonus;
  }
}

export default WinningLotto;
