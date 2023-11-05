import Parser from '../parser/Parser.js';
import validateLottoNumber from '../validator/validateLottoNumber.js';

class LottoNumber {
  #lottoNumber;

  constructor(lottoNumber) {
    const parsedLottoNumber = Parser.parseInt(lottoNumber);
    LottoNumber.#validate(parsedLottoNumber);

    this.#lottoNumber = parsedLottoNumber;
  }

  static #validate(lottoNumber) {
    validateLottoNumber(lottoNumber);
  }

  get() {
    return this.#lottoNumber;
  }
}

export default LottoNumber;
