import { isNumber, isNumberInValidScope } from './utils/validators/index.js';

class Bonus {
  #bonus;

  constructor(number) {
    this.#validator(number);

    this.#bonus = Number(number);
  }

  #validator(number) {
    if (!isNumber(number)) throw new Error('[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.');
    if (!isNumberInValidScope(number)) throw new Error('[ERROR] 1~45사이의 숫자가 아닙니다.');
  }

  static of(number) {
    return new Bonus(number);
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

export default Bonus;
