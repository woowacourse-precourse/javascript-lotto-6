import { MATCH_COUNT, PRIZE, RANK } from '../constants/statistics.js';

class Statistics {
  #table;

  constructor() {
    this.#table = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
  }

  updateTable(matchResult) {
    const rank = this.getRank(matchResult);

    if (rank) {
      this.#table[rank] += 1;
    }
  }

  getRank(matchResult) {
    const { count, bonus } = matchResult;

    if (count === MATCH_COUNT.first) return RANK.first;
    if (count === MATCH_COUNT.second && bonus) return RANK.second;
    if (count === MATCH_COUNT.third || (count === MATCH_COUNT.fourth && bonus))
      return RANK.third;
    if (count === MATCH_COUNT.fourth || (count === MATCH_COUNT.fifth && bonus))
      return RANK.fourth;
    if (count === MATCH_COUNT.fifth || (count === MATCH_COUNT.sixth && bonus))
      return RANK.fifth;

    return null;
  }

  calculateRevenueRate(money) {
    const tableArray = Object.entries(this.#table);
    const totalMoney = tableArray.reduce((total, [rank, count]) => {
      return total + count * PRIZE[rank];
    }, 0);
    const revenueRate = (totalMoney / money) * 100;

    return revenueRate;
  }

  getRankCount(rank) {
    return this.#table[rank];
  }

  getTable() {
    return this.#table;
  }
}

export default Statistics;
