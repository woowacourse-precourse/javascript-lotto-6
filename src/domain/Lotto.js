import Parser from '../parser/Parser.js';
import LottoNumber from './LottoNumber.js';

// 파서와 유효성 검사 진행
class Lotto {
  #numbers;

  constructor(lotto) {
    const parsedLotto = Parser.parseLotto(lotto).map(
      (num) => new LottoNumber(num),
    );

    Lotto.#validate(parsedLotto);

    this.#numbers = parsedLotto;
  }

  static #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  get() {
    return this.#numbers;
  }
}

export default Lotto;
