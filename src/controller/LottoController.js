import OutputView from '../views/OutputView.js';
import LottoShop from '../domain/LottoShop.js';
import { getMatchCount, includeBonusNumber } from '../utils/match.js';

class LottoController {
  #money;
  #lottos;
  #statistics;
  #totalRevenueRate;

  constructor(money) {
    this.#money = money;
    this.#lottos = LottoShop.purchaseLotto(money);
    this.#statistics = this.initLottoStatistics();
    this.#totalRevenueRate = 0;
  }

  initLottoStatistics() {
    return {
      match3: { match: 3, bonus: false, count: 0, prize: 5000 },
      match4: { match: 4, bonus: false, count: 0, prize: 50000 },
      match5: { match: 5, bonus: false, count: 0, prize: 1500000 },
      match5Bonus: { match: 5, bonus: true, count: 0, prize: 30000000 },
      match6: { match: 6, bonus: false, count: 0, prize: 2000000000 },
    };
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
