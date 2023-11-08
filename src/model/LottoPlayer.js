import { RANK_RULES } from '../constants/Rules.js';

export default class LottoPlayer {
  #purchaseAmount;

  #lottoTickets;

  #rankCounts;

  #winningAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottoTickets = [];
    this.#winningAmount = 0;
    this.#rankCounts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  /**
   * 로또 한 장을 추가합니다.
   * @param {Lotto} lotto
   */
  setLottoTickets(lotto) {
    this.#lottoTickets.push(lotto);
  }

  /**
   * 구입한 로또 목록을 반환합니다.
   * @returns {Lotto[]} [구입한 로또 목록]
   */
  getLottoTickets() {
    return this.#lottoTickets;
  }

  /**
   * 로또 구입 금액을 반환합니다.
   * @returns {number} [로또 구입 금액]
   */
  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  /**
   * 총 당첨 금액을 반환합니다.
   * @returns {number}
   */
  getWinningAmount() {
    return this.#winningAmount;
  }

  /**
   * 당첨된 로또 개수에 따라, 등수별 당첨 개수를 더합니다.
   * bonus숫자가 당첨되고, 5개를 맞추었을 시 2등에 추가합니다.
   * @param {number} correctNumberCounts
   * @param {boolean} isIncludedBonusNumber
   */
  setRankCounts(correctNumberCounts, isIncludedBonusNumber) {
    switch (correctNumberCounts) {
      case 3:
        this.#rankCounts[5] += 1;
        break;
      case 4:
        this.#rankCounts[4] += 1;
        break;
      case 5:
        isIncludedBonusNumber ? (this.#rankCounts[2] += 1) : (this.#rankCounts[3] += 1);
        break;
      default:
        this.#rankCounts[1] += 1;
    }
  }

  /**
   * 각 등수별 당첨 개수를 반환합니다.
   * @returns {Object}
   */
  getRankCounts() {
    return this.#rankCounts;
  }

  /**
   * 등수별 당첨 개수에 따라 총 당첨 금액을 계산합니다.
   */
  calculateWinningAmount() {
    Object.entries(this.#rankCounts).forEach(([rank, count]) => {
      this.#winningAmount += RANK_RULES[rank].prize * count;
    });
  }
}
