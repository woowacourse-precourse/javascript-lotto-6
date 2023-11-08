import { RANKING } from '../common/constants.js';

class Ranking {

  #ranks

  constructor() {
    this.#ranks = new Map();
    this.#initRanks();
  }

  calculateRanking(matchedCount, isBonusMatched) {
    Object.entries(RANKING).forEach(([key, rank]) => {
      if (rank.match === matchedCount && rank.bonus === isBonusMatched) {
        const existingValue = this.#ranks.get(key);
        this.#ranks.set(key, existingValue + 1);
      }
    });
  }

  getRanks() {
    return this.#ranks
  }

  #initRanks() {
    Object.keys(RANKING).forEach(key => {
      this.#ranks.set(key, 0);
    });
  }
}

export default Ranking;
