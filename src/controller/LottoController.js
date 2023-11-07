import OutputView from '../views/OutputView.js';
import LottoShop from '../domain/LottoShop.js';
import { getMatchCount, includeBonusNumber } from '../utils/match.js';
import Statistics from '../domain/Statistics.js';

class LottoController {
  #money;
  #lottos;
  #statistics;
  #totalRevenueRate;

  constructor(money) {
    this.#money = money;
    this.#lottos = LottoShop.purchaseLotto(money);
    this.#statistics = new Statistics();
    this.#totalRevenueRate = 0;
  }

  compareLottos(winningNumbers, bonusNumber) {
    this.#lottos.forEach(lotto => {
      const matchResult = this.matchLotto(lotto, winningNumbers, bonusNumber);

      this.updateLottoStatistics(matchResult);
    });
  }

  matchLotto(lotto, winningNumbers, bonusNumber) {
    const numbers = lotto.getNumbers();
    const count = getMatchCount(numbers, winningNumbers);
    const bonus = includeBonusNumber(numbers, bonusNumber);

    return { count, bonus };
  }

  updateLottoStatistics(matchResult) {
    if (matchResult.count < 3 && !matchResult.bonus) return;

    const key = this.determineStatisticsKey(matchResult);
    this.updateStatistics(key);
  }

  determineStatisticsKey({ count, bonus }) {
    if (count === 5 && bonus) {
      return 'match5Bonus';
    }

    if (bonus) {
      return `match${count + 1}`;
    }

    return `match${count}`;
  }

  updateStatistics(key) {
    if (this.#statistics[key]) {
      this.#statistics[key].count += 1;
    }
  }

  calculateRateOfReturn() {
    const matches = Object.values(this.#statistics);
    let totalRevenueMoney = 0;

    matches.forEach(({ count, prize }) => (totalRevenueMoney += count * prize));
    this.#totalRevenueRate = (totalRevenueMoney / this.#money) * 100;
  }

  showLottoResult() {
    OutputView.printStatisticsHeader();
    OutputView.printStatistics(this.#statistics);
    OutputView.printTotalRevenueRate(this.#totalRevenueRate);
  }
}

export default LottoController;
