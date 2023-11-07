import {
  COUNT,
  DEFAULT_NUM,
  IS_BOUNS_INDEX,
  MATCH_COUNTS,
} from './constants/conditions.js';

export default class MatchingTable {
  #table = {
    three: DEFAULT_NUM,
    four: DEFAULT_NUM,
    fiveNotBonus: DEFAULT_NUM,
    fiveAndBonus: DEFAULT_NUM,
    all: DEFAULT_NUM,
  };

  getTable() {
    return this.#table;
  }

  updateTable(matchCountList) {
    matchCountList.forEach((count) => {
      if (Array.isArray(count)) {
        this.#isBonusMatch(count)
          ? (this.#table.fiveAndBonus += COUNT.plus)
          : (this.#table.fiveNotBonus += COUNT.plus);
      }
      if (count === MATCH_COUNTS.three) this.#table.three += COUNT.plus;
      if (count === MATCH_COUNTS.four) this.#table.four += COUNT.plus;
      if (count === MATCH_COUNTS.all) this.#table.all += COUNT.plus;
    });
  }

  #isBonusMatch(count) {
    return !!count[IS_BOUNS_INDEX];
  }
}
