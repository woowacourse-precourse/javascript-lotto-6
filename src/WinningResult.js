import {
  COUNT,
  DEFAULT_NUM,
  IS_BOUNS_INDEX,
  MATCH_COUNTS,
} from './constants/conditions.js';

export default class WinningResult {
  #matchCountList;

  #matchingTable = {
    three: DEFAULT_NUM,
    four: DEFAULT_NUM,
    fiveNotBonus: DEFAULT_NUM,
    fiveAndBonus: DEFAULT_NUM,
    all: DEFAULT_NUM,
  };

  constructor(matchCountList) {
    this.#matchCountList = matchCountList;
    this.#updateTable(this.#matchCountList);
  }

  getResult() {
    return this.#matchingTable;
  }

  #updateTable(matchCountList) {
    matchCountList.forEach((count) => {
      if (Array.isArray(count)) {
        this.#isBonusMatch(count)
          ? (this.#matchingTable.fiveAndBonus += COUNT.plus)
          : (this.#matchingTable.fiveNotBonus += COUNT.plus);
      }
      if (count === MATCH_COUNTS.three) this.#matchingTable.three += COUNT.plus;
      if (count === MATCH_COUNTS.four) this.#matchingTable.four += COUNT.plus;
      if (count === MATCH_COUNTS.all) this.#matchingTable.all += COUNT.plus;
    });
  }

  #isBonusMatch(count) {
    return !!count[IS_BOUNS_INDEX];
  }
}
