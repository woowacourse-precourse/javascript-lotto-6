import { COUNT } from './constants/conditions.js';
import TABLE_TEMPLATE from './constants/tableTemplate.js';

export default class MatchingTable {
  #table = new Map(TABLE_TEMPLATE);

  updateTable(count, isBonusMatch) {
    this.#table.forEach((value, key) => {
      if (key.matchCount === count && key.isBonusMatch === isBonusMatch) {
        this.#table.set(key, value + COUNT.plus);
      }
    });
  }

  getTable() {
    return this.#table;
  }

  getSummaryResult() {
    return [...this.#table].map(([{ ranking }, count]) => ({ ranking, count }));
  }
}
