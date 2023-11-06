import REGEXP from '../constants/RegExp.js';
import SETTINGS from '../constants/Settings.js';
import {
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
  LottoDuplicatedError
} from '../error/CustomErrors.js';

class Lotto {
  _numbers;

  constructor(numbers) {
    this._validate(numbers);
    numbers.sort((a, b) => a - b);
    this._numbers = numbers;
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
    return this._numbers;
  }

  #getMatchWithNumbers(numbers) {
    let counter = 0;
    this._numbers.forEach((number) => {
      if (numbers.includes(number)) {
        counter += 1;
      }
    });

    return counter;
  }

  #getMatchWithBonus(bonus) {
    if (this._numbers.includes(bonus)) {
      return true;
    }
    return false;
  }

  getPrize(numbers, bonus) {
    switch (this.#getMatchWithNumbers(numbers)) {
      case 3: return '5';
      case 4: return '4';
      case 5:
        if (this.#getMatchWithBonus(bonus) === false) {
          return '3';
        }
        return '2';
      case 6: return '1';
    }
  }
}

export default Lotto;
