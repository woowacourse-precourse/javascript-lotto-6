import statsModel from './models/statsModel.js';
import outputs from './View/outputs.js';

class Stats {
  #revenues;

  #matchCounts;

  constructor() {
    this.#revenues = [];
    this.#matchCounts = [];
  }

  #setRevenuesAndMatchCounts(random, lotto, bonus) {
    this.#revenues = statsModel.getRevenues(random, lotto, bonus);
    this.#matchCounts = statsModel.getMatchCounts(this.#revenues);
  }

  controlCount(random, lotto, bonus) {
    this.#setRevenuesAndMatchCounts(random, lotto, bonus);

    const stats = statsModel.getStats(this.#matchCounts);

    outputs.printStatsTitle();
    outputs.printStats(stats);
  }

  getRevenues() {
    return this.#revenues;
  }
}

export default Stats;
