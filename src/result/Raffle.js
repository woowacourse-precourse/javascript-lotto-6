import SETTINGS from '../constants/Settings.js';
import REGEXP from '../constants/RegExp.js';
import {
  LottoDuplicatedError,
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
  BonusRangeError,
  BonusTypeError,
  BonusIncludedError,
} from '../error/CustomErrors.js';

export default class Raffle {
  #numbers;
  #bonus;

  constructor(numbers, bonus) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
    this.#validateBonus(bonus);
    this.#bonus = bonus;
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

  getNumbers() {
    return this.#numbers;
  }

  getBonus() {
    return this.#bonus;
  }
}
