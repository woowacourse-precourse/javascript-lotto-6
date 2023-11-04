import Lotto from '../Lotto.js';
import ApplicationError from '../exceptions/ApplicationError.js';
import LottoNumber from './LottoNumber.js';

class WinningLotto {
  static ERROR_MESSAGES = Object.freeze({
    invalidLottoArg: 'lotto에 Lotto를 입력해주세요!',
    invalidBonusArg: 'bonus에 LottoNumber를 입력해주세요!',
    existBonus: '당첨 번호에 보너스 번호가 존재합니다!',
    invalidPrepareArg: 'prepare의 인자에 Lotto를 입력해주세요!',
    invalidHasBonusArg: 'hasBonus의 인자에 Lotto를 입력해주세요!',
  });

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
    this.#validate(lotto, bonus);
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

  #validate(lotto, bonus) {
    if (!(lotto instanceof Lotto)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidLottoArg);
    }
    if (!(bonus instanceof LottoNumber)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidBonusArg);
    }

    if (lotto.match(bonus)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.existBonus);
    }
  }

  /**
   * 입력받은 lotto가 WinningLotto의 lotto와 몇개가 동일한지 계산합니다.
   * @param {Lotto} lotto
   * @returns {number}
   */
  prepare(lotto) {
    this.#validatePrepare(lotto);
    const numbers = lotto.getNumbers();
    const result = numbers.filter((number) => this.#lotto.match(number)).length;

    return result;
  }

  #validatePrepare(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidPrepareArg);
    }
  }

  /**
   * 입력받은 bonus가 WinningLotto의 lotto가 소유하였는지 확인합니다.
   * @param {Lotto} lotto
   * @returns {boolean}
   */
  hasBonus(lotto) {
    this.#validateHasBonus(lotto);
    return lotto.match(this.#bonus);
  }

  #validateHasBonus(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidHasBonusArg);
    }
  }
}

export default WinningLotto;
