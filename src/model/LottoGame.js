import { LOTTO_MAGICNUMBER, LOTTO_PRICE } from '../constants/LottoOption.js';
import getRandomNumbersByAscending from '../utils/generateRandomNumber.js';
import { validateLottoSeedMoney } from '../validator/index.js';
import PlayerLotto from './PlayerLotto.js';

export default class LottoGame {
  /**
   * @private
   * @type {number}
   */
  #seedMoney;

  /**
   * @private
   * @type {PlayerLotto[]}
   */
  #lottoList;

  /**
   * @constructor
   * @param {string} seedMoney
   */
  constructor(seedMoney) {
    validateLottoSeedMoney(seedMoney);
    this.#seedMoney = Number(seedMoney);
    this.#buyLottoes();
  }

  /**
   * @private
   */
  #buyLottoes() {
    const amount = this.#seedMoney / LOTTO_PRICE;

    this.#lottoList = Array.from({ length: amount }, () => {
      const randomNumbers = getRandomNumbersByAscending(
        LOTTO_MAGICNUMBER.minValue,
        LOTTO_MAGICNUMBER.maxValue,
        LOTTO_MAGICNUMBER.selectAmount
      );

      return new PlayerLotto(randomNumbers);
    });
  }

  /**
   * @public
   * @returns {{lottoAmount: number, lottoList: PlayerLotto[]}}
   */
  getLottoes() {
    return {
      lottoList: this.#lottoList,
      lottoAmount: this.#seedMoney / LOTTO_PRICE,
    };
  }
}
