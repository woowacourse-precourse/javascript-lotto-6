import REGEXP from '../constants/RegExp.js';
import { SETTINGS } from '../constants/Settings.js';
import { LottoLengthError, LottoRangeError, LottoTypeError, LottoDuplicatedError } from '../error/CustomErrors.js';

class Lotto {
  #numbers;
  #prize;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
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

  getNumbers() {
    return this.#numbers;
  }

  getMatchWithNumbers(numbers) {
    let counter = 0;
    this.#numbers.forEach((number) => {
      if (numbers.includes(number)) {
        counter += 1;
      }
    });

    return counter;
  }

  getMatchWithBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }

  setPrize(numbers, bonus) {
    switch (this.getMatchWithNumbers(numbers)) {
      case 3: this.#prize = 5;
      case 4: this.#prize = 4;
      case 5:
        this.#prize = 3;
        if (this.getMatchWithBonus(bonus) == true) {
          this.#prize = 2;
        }
      case 6: this.#prize = 1;
    }
  }

  getPrize() {
    return this.#prize;
  }
}

export default Lotto;
