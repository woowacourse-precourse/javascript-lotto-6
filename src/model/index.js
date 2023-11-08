import Bonus from '../Bonus.js';
import Lotto from '../Lotto.js';
import PurchaseAmount from '../PurchaseAmount.js';
import { LOTTO } from '../constants/System.js';
import LottoGenerator from './LottoGenerator.js';

class LottoModel {
  /**
   * @type {number[][]}
   * @private
   */
  #userLottos;

  /**
   
   * @type {object} LOTTO_PRIZE
   * @property {number} '1등' 
   * @property {number} '2등'
   * @property {number} '3등'
   * @property {number} '4등'
   * @property {number} '5등'
   * @property {number} '꽝'
   */
  static LOTTO_PRIZE = {
    '1등': 2_000_000_000,
    '2등': 30_000_000,
    '3등': 1_500_000,
    '4등': 50_000,
    '5등': 5_000,
    꽝: 0,
  };

  /**
   * @param {number} purchaseAmount
   * @returns {number[][]}
   */
  generateLotto(purchaseAmount) {
    const matchCount = PurchaseAmount.of(purchaseAmount).getLottoCount();
    const userLottos = LottoGenerator.run(matchCount);
    this.#userLottos = userLottos;

    return userLottos;
  }

  /**
   * @param {Lotto} winningNumbers
   * @param {Bonus} bonus
   * @returns {object}
   * @property {Map} ranks
   * @property {number} rateOfReturn
   */
  getWinningStatistics(winningNumbers, bonus) {
    const lottoResult = this.#checkLottoResult(winningNumbers, bonus);
    const ranks = LottoModel.#calculateRanks(lottoResult);
    const rateOfReturn = this.#calculateRateOfReturn(ranks);

    return { ranks, rateOfReturn };
  }

  /**
   * @param {Lotto} winningNumbers
   * @param {Bonus} bonus
   * @returns {string[]}
   */
  #checkLottoResult(winningNumbers, bonus) {
    return this.#userLottos.map((userLotto) =>
      winningNumbers.compareWinningNumbers(userLotto, bonus.getBonusNumber()),
    );
  }

  /**
   * @param {string[]} lottoResult
   * @returns {Map}
   */
  static #calculateRanks(lottoResult) {
    return lottoResult.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);

      return acc;
    }, new Map());
  }

  /**
   * @param {Map} ranks
   * @returns {number}
   */
  #calculateRateOfReturn(ranks) {
    const totalPrizeMoney = LottoModel.#calculateTotalPrizeMoney(ranks);

    return (totalPrizeMoney / (this.#userLottos.length * LOTTO.price)) * 100;
  }

  /**
   * @param {Map} ranks
   * @returns {number}
   */
  static #calculateTotalPrizeMoney(ranks) {
    let totalPrizeMoney = 0;

    ranks.forEach((count, rank) => {
      totalPrizeMoney += LottoModel.LOTTO_PRIZE[rank] * count;
    });

    return totalPrizeMoney;
  }
}

export default LottoModel;
