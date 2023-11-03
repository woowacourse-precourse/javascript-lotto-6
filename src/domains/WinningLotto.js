import REGEXP from '../constants/RegExp.js';
import { SETTINGS } from '../constants/Settings.js';
import { LottoRangeError, LottoTypeError, LottoLengthError, LottoDuplicatedError, BonusTypeError, BonusRangeError, BonusIncludedError } from '../error/CustomErrors.js';
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
    this.#bonus = Number(bonus);
  }

  #validateBonus(bonus) {
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

  getMatchWithNumbers(numbers) {
    let counter = 0;
    numbers.forEach((number) => {
      if (this.#numbers.includes(number)) {
        counter += 1;
      }
    });

    return counter;
  }

  getMatchWithBonus(numbers) {
    if (numbers.includes(this.#bonus)) {
      return true;
    }
    return false;
  }
}

export default WinningLotto;
