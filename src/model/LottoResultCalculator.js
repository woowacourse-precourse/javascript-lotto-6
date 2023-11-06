import { LOTTO_RANK } from '../constants/LottoOption.js';

export default class LottoResultCalculator {
  /**
   * @private
   * @type {number[]}
   */
  #prizeTable = [0, 0, 0, 0, 0];

  /**
   * @private
   * @type {number}
   */
  #prizeTotal = 0;

  /**
   * @public
   * @param {PlayerLotto[]} lottoNumbers
   * @param {number[]} winningNumbers
   * @param {number} winningBonusNumber
   * @returns {{prizeAmount: number[], prizeTotal: number}}
   */
  calculateResults(lottoNumbers, winningNumbers, winningBonusNumber) {
    lottoNumbers.forEach((lotto) => {
      const match = lotto.compare(winningNumbers, winningBonusNumber);

      if (match.mainNumber === LOTTO_RANK.second.mainNumber) {
        return this.#calculateSecondOrThirdPrize(match);
      }

      return this.#calculatePrize(match);
    });

    return { prizeAmount: this.#prizeTable, prizeTotal: this.#prizeTotal };
  }

  /**
   * @private
   * @param {{bonusNumber: boolean, mainNumber: number}} match
   */
  #calculatePrize(match) {
    Object.values(LOTTO_RANK).forEach((rank, idx) => {
      if (rank.mainNumber === match.mainNumber) {
        this.#prizeTable[idx] += 1;
        this.#prizeTotal += rank.prizeValue;
      }
    });
  }

  /**
   * @private
   * @param {{bonusNumber: boolean, mainNumber: number}} match
   */
  #calculateSecondOrThirdPrize(match) {
    Object.values(LOTTO_RANK).forEach((rank, idx) => {
      if (
        match.mainNumber === rank.mainNumber &&
        match.bonusNumber === rank.bonusNumber
      ) {
        this.#prizeTable[idx] += 1;
        this.#prizeTotal += rank.prizeValue;
      }
    });
  }
}
