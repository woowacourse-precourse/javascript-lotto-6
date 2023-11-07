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
   * @param {{mainNumber: number, bonusNumber: boolean}[]} matchList
   * @returns {{prizeAmount: number[], prizeTotal: number}}
   */
  calculateResults(matchList) {
    matchList.forEach((match) => {
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
