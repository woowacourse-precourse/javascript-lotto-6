export default class MatchingTable {
  #matchingTable = {
    threeMatching: 0,
    fourMatching: 0,
    fiveMatchingNotBonus: 0,
    fiveMatchingAndBonus: 0,
    allMatching: 0,
  };

  updateMatchingCount(rankingList) {
    rankingList.forEach((ranking) => {
      if (ranking === 5) this.#matchingTable.threeMatching += 1;
      if (ranking === 4) this.#matchingTable.fourMatching += 1;
      if (ranking === 3) this.#matchingTable.fiveMatchingNotBonus += 1;
      if (ranking === 2) this.#matchingTable.fiveMatchingAndBonus += 1;
      if (ranking === 1) this.#matchingTable.allMatching += 1;
    });
  }

  getMatchingTable() {
    return this.#matchingTable;
  }
}
