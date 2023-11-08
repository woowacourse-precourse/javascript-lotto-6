import { errorConstants, magicNumber } from '../constants/index.js';

export default class BonusNumber {
  #number;

  constructor(number, lottoNumber) {
    this.#validate(number, lottoNumber);
    this.#number = Number(number);
  }

  #validate(number, lottoNumber) {
    this.#isNumber(number);
    this.#isNotZero(number);
    this.#isNotEmpty(number);
    this.#isInRange(number);
    this.#isNotSameLottoNumber(number, lottoNumber);
  }

  #isNumber(number) {
    if (isNaN(number)) throw new Error(errorConstants.NOT_A_NUMBER);
  }

  #isNotZero(number) {
    if (!number) throw new Error(errorConstants.NOT_ZERO);
  }

  #isNotEmpty(number) {
    if (/\s/.test(String(number))) throw new Error(errorConstants.NOT_EMPTY);
  }

  #isInRange(number) {
    if (number > magicNumber.END_RANGE)
      throw new Error(errorConstants.NOT_IN_RANGE);
  }

  #isNotSameLottoNumber(number, lottoNumber) {
    if (lottoNumber.includes(number))
      throw new Error(errorConstants.NOT_SAME_LOTTO_NUMBER);
  }

  getBonusNumber() {
    return this.#number;
  }
}
