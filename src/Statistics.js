import { LottoWinningCriteria, PurchaseRule } from './models/rule.js';

class Statistics {
  #statistics = LottoWinningCriteria;

  get stat() {
    return this.#statistics;
  }

  constructor(winningNumbers, bonusNumber, lottos) {
    this.#setStatistics(winningNumbers, bonusNumber, lottos);
  }

  #setStatistics(winningNumbers, bonusNumber, lottos) {
    const allowedNumberOfMatches = this.#statistics.map(stat => stat.numberOfMatches);

    lottos.forEach(lotto => {
      const numberOfMatches = lotto.filter(number => winningNumbers.includes(number)).length;

      if (!allowedNumberOfMatches.includes(numberOfMatches)) {
        return;
      }

      const isBonusMatch = lotto.includes(bonusNumber);
      this.#countStatistics(numberOfMatches, isBonusMatch);
    });
  }

  #countStatistics(numberOfMatches, isBonusMatch) {
    const found = this.#statistics.find(stat => numberOfMatches === stat.numberOfMatches && isBonusMatch === stat.allowBonus);

    if (!found) {
      return;
    }

    found.count += 1;
  }
}

export default Statistics;
