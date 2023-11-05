import ERROR_MESSAGE from './constants/error.js';
import { LOTTO_NUM_RANGE } from './constants/conditions.js';

export default class Bonus {
  #bonus;

  static generateBonus(number, winningLotto) {
    return new Bonus(number, winningLotto);
  }

  constructor(number, winningLotto) {
    this.#validate(number, winningLotto);
    this.#bonus = number;
  }

  /* 
  🐛FIX: 조건 수정
  */
  #validate(number, winningLotto) {
    const isNumber = /^\d+$/;
    if (!isNumber.test(number)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if (number < LOTTO_NUM_RANGE.min || number > LOTTO_NUM_RANGE.max) {
      throw new Error(ERROR_MESSAGE.invalidLottoNumRange);
    }
    if (winningLotto.includes(number)) {
      throw new Error(ERROR_MESSAGE.duplicatedWinningLotto);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}
