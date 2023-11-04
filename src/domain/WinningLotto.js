import Lotto from '../Lotto.js';
import LottoNumber from './LottoNumber.js';

class WinningLotto {
  /**
   * 결과를 결정할 우승 로또입니다.
   * @type {Lotto}
   */
  #lotto;

  /**
   * 결과를 결정할 보너스 번호입니다.
   * @type {LottoNumber}
   */
  #bonus;

  /**
   * 결과를 결정할 우승 로또와 보너스 번호입니다.
   * @param {Lotto} lotto
   * @param {LottoNumber} bonus
   */
  constructor(lotto, bonus) {
    this.#lotto = lotto;
    this.#bonus = bonus;
  }

  /**
   * @param {Lotto} lotto
   * @param {LottoNumber} bonus
   * @returns {WinningLotto}
   */
  static of(lotto, bonus) {
    return new WinningLotto(lotto, bonus);
  }

  /**
   * 입력받은 lotto가 WinningLotto의 lotto와 몇개가 동일한지 계산합니다.
   * @param {Lotto} lotto
   * @returns {number}
   */
  prepare(lotto) {
    const numbers = lotto.getNumbers();
    const result = numbers.filter((number) => this.#lotto.match(number)).length;

    return result;
  }

  /**
   * 입력받은 bonus가 WinningLotto의 lotto가 소유하였는지 확인합니다.
   * @param {Lotto} lotto
   * @returns {boolean}
   */
  hasBonus(lotto) {
    return lotto.match(this.#bonus);
  }
}

export default WinningLotto;
