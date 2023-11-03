import REGEXP from '../constants/RegExp.js';
import { SETTINGS } from '../constants/Settings.js';
import { LottoRangeError, LottoTypeError, LottoLengthError, LottoDuplicatedError } from '../error/Errors.js';

class WinningLotto {
  #numbers;
  #bonus;

  setNumbers(numbers) {
    const numberArray = this.#stringToNumber(numbers)
    this.#validateNumbers(numberArray);
    this.#numbers = numberArray;
  }

  #stringToNumber(array) {
    const inputArray = array.split(',');
    const numberArray = [];
    inputArray.forEach(string => {
      numberArray.push(Number(string));
    });
    numberArray.sort((a, b) => a - b);

    return numberArray;
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
    if (Number(bonus)) {
      throw new Error('[ERROR]')
    }
  }
}

export default WinningLotto;
