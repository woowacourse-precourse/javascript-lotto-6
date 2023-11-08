import {
  COUNT,
  DEFAULT_NUM,
  IS_BOUNS_INDEX,
  MATCH_COUNTS,
} from './constants/conditions';

export default class WinningResult {
  #matchingTable = {
    three: DEFAULT_NUM,
    four: DEFAULT_NUM,
    fiveNotBonus: DEFAULT_NUM,
    fiveAndBonus: DEFAULT_NUM,
    all: DEFAULT_NUM,
  };

  constructor(matchCountList) {
    this.#updateTable(matchCountList);
  }

  #updateTable(matchCountList) {
    matchCountList.forEach((count) => {
      if (Array.isArray(count)) {
        if (count[IS_BOUNS_INDEX])
          this.#matchingTable.fiveAndBonus += COUNT.plus;
        else this.#matchingTable.fiveNotBonus += COUNT.plus;
      }
      if (count === MATCH_COUNTS.three) this.#matchingTable.three += COUNT.plus;
      if (count === MATCH_COUNTS.four) this.#matchingTable.four += COUNT.plus;
      if (count === MATCH_COUNTS.all) this.#matchingTable.all += COUNT.plus;
    });
  }

  getResult() {
    return this.#matchingTable;
  }
}
