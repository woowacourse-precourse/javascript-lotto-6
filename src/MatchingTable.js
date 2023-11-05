import { COUNT, DEFAULT_NUM, RANKING } from './constants/conditions.js';

export default class MatchingTable {
  #matchingTable = {
    threeMatching: DEFAULT_NUM,
    fourMatching: DEFAULT_NUM,
    fiveMatchingNotBonus: DEFAULT_NUM,
    fiveMatchingAndBonus: DEFAULT_NUM,
    allMatching: DEFAULT_NUM,
  };

  updateMatchingCount(rankingList) {
    rankingList.forEach((ranking) => {
      if (ranking === RANKING.fifth)
        this.#matchingTable.threeMatching += COUNT.plus;
      if (ranking === RANKING.fourth)
        this.#matchingTable.fourMatching += COUNT.plus;
      if (ranking === RANKING.third)
        this.#matchingTable.fiveMatchingNotBonus += COUNT.plus;
      if (ranking === RANKING.second)
        this.#matchingTable.fiveMatchingAndBonus += COUNT.plus;
      if (ranking === RANKING.first)
        this.#matchingTable.allMatching += COUNT.plus;
    });
  }

  getMatchingTable() {
    return this.#matchingTable;
  }
}
