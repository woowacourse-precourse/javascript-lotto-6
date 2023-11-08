import { LOTTO_RANK } from '../utils/constants/constants';

class Rank {
  #matchCount;
  #isMatchBonus;
  #prize;

  constructor(rank) {
    this.#matchCount = LOTTO_RANK[rank].matchCount;
    this.#isMatchBonus = LOTTO_RANK[rank].isMatchBonus;
    this.#prize = LOTTO_RANK[rank].prize;
  }

  getMatchCount() {
    return this.#matchCount;
  }

  getIsMatchBonus() {
    return this.#isMatchBonus;
  }

  getPrize() {
    return this.#prize;
  }
}

export default Rank;
