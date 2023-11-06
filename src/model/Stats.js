import OPTIONS from '../constants/options.js';
import { INDEX_TABLE, RANK } from '../constants/rank.js';

class Stats {
  #userLottos;

  #winningNumbers;

  #bonusNumber;

  #ranks;

  #stats = Array.from({ length: OPTIONS.totalRank }).fill(0);

  constructor(userLottos, winningNunbers, bonusNumber) {
    this.#userLottos = userLottos;
    this.#winningNumbers = winningNunbers;
    this.#bonusNumber = bonusNumber;
    this.#setRank();
  }

  #setRank() {
    this.#ranks = this.#userLottos.map(userLotto => this.#getRank(userLotto));
  }

  #getRank(userLotto) {
    const hits = this.#winningNumbers.filter(winningNumber =>
      userLotto.includes(winningNumber),
    );

    return this.#isSecond(hits, userLotto) ? RANK.second : RANK[hits.length];
  }

  #isSecond(hits, userLotto) {
    const { secondThresHold } = OPTIONS;

    return (
      hits.length === secondThresHold && userLotto.includes(this.#bonusNumber)
    );
  }

  #setStats() {
    this.#ranks.forEach(rank => {
      if (INDEX_TABLE[rank]) this.#stats[INDEX_TABLE[rank] - 1] += 1;
    });
  }

  getStats() {
    this.#setStats();

    return this.#stats.reverse();
  }
}

export default Stats;
