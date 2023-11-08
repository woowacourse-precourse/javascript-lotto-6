import { LottoWinningCriteria, PurchaseRule } from './models/rule.js';

class Statistics {
  #statistics = LottoWinningCriteria;
  #rateOfReturn;

  get stat() {
    return this.#statistics;
  }

  get rateOfReturn() {
    return this.#rateOfReturn;
  }

  constructor(winningNumbers, bonusNumber, lottos) {
    this.#setStatistics(winningNumbers, bonusNumber, lottos);
    this.#setRateOfReturn(lottos);
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

  #setRateOfReturn(lottos) {
    const prize = this.#statistics.reduce((acc, cur) => acc + (cur.prize * cur.count), 0);
    const paid = PurchaseRule.UNIT * lottos.length;
    const rateOfReturn = (prize / paid) * 100;

    this.#rateOfReturn = Math.round(rateOfReturn * 100) / 100;
  }
}

export default Statistics;
