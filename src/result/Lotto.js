import SETTINGS from '../constants/Settings.js';
import REGEXP from '../constants/RegExp.js';
import {
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
  LottoDuplicatedError
} from '../error/CustomErrors.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
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

  #getMatchWithNumbers(numbers) {
    let counter = 0;
    this.#numbers.forEach((number) => {
      if (numbers.includes(number)) {
        counter += 1;
      }
    });

    return counter;
  }

  #getMatchWithBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }

  getRank(numbers, bonus) {
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