import statsModel from './models/statsModel.js';

class Stats {
  #revenues;

  #matchCounts;

  #stats;

  constructor(random, lotto, bonus) {
    this.#revenues = statsModel.getRevenues(random, lotto, bonus);
    this.#matchCounts = statsModel.getMatchCounts(this.#revenues);
    this.#stats = statsModel.getStats(this.#matchCounts);
  }

  getRevenuesAndStats() {
    return { revenues: this.#revenues, stats: this.#stats };
  }
}

export default Stats;
