import { WINNING_RANK_TO_PRIZE } from '../constants/Rules.js';

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

  setLottoTickets(lotto) {
    this.#lottoTickets.push(lotto);
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getWinningAmount() {
    return this.#winningAmount;
  }

  setRankCounts(correctNumberCounts, isIncludedBonusNumber) {
    switch (correctNumberCounts) {
      case 3:
        this.#rankCounts[5] += 1;
        this.#winningAmount += WINNING_RANK_TO_PRIZE[5];
        break;
      case 4:
        this.#rankCounts[4] += 1;
        this.#winningAmount += WINNING_RANK_TO_PRIZE[4];
        break;
      case 5:
        if (!isIncludedBonusNumber) {
          this.#rankCounts[3] += 1;
          this.#winningAmount += WINNING_RANK_TO_PRIZE[3];
        } else {
          this.#rankCounts[2] += 1;
          this.#winningAmount += WINNING_RANK_TO_PRIZE[2];
        }
        break;
      default:
        this.#rankCounts[1] += 1;
        this.#winningAmount += WINNING_RANK_TO_PRIZE[1];
    }
  }

  getRankCounts() {
    return this.#rankCounts;
  }
}
