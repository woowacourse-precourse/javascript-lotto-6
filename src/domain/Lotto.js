import Parser from '../parser/Parser.js';
import validateLotto from '../validator/validateLotto.js';
import LottoNumber from './LottoNumber.js';

// 파서와 유효성 검사 진행
class Lotto {
  #lotto;

  constructor(lotto) {
    const parsedLotto = Array.isArray(lotto)
      ? lotto
      : Parser.parseLotto(lotto).map((num) => new LottoNumber(num));

    Lotto.#validate(parsedLotto);

    this.#lotto = parsedLotto;
  }

  static #validate(lotto) {
    validateLotto(lotto);
  }

  get() {
    return this.#lotto;
  }
}

export default Lotto;
