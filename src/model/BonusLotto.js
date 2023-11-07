import { validateLottoBonusNumber } from '../validator/index.js';

export default class BonusLotto {
  /**
   * @private
   * @type {number}
   */
  #bonusNumber;

  /**
   * @constructor
   * @param {number[]} lottoNumbers
   * @param {string} bonusLottoNumber
   */
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
