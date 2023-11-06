import { validateLottoBonusNumber } from '../validator/index.js';

export default class BonusLotto {
  /**
   * @private
   * @type {number}
   */
  #bonusNumber;

  constructor(lottoNumbers, bonusLottoNumber) {
    validateLottoBonusNumber(lottoNumbers, bonusLottoNumber);
    this.#bonusNumber = Number(bonusLottoNumber);
  }

  /**
   * @public
   * @returns {number}
   */
  getBonusLottoNumber() {
    return this.#bonusNumber;
  }
}
