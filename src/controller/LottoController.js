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
      this.#statistics.updateTable(matchResult);
    });
  }

  matchLotto(lotto, winningNumbers, bonusNumber) {
    const numbers = lotto.getNumbers();
    const count = getMatchCount(numbers, winningNumbers);
    const bonus = includeBonusNumber(numbers, bonusNumber);

    return { count, bonus };
  }

  calculateRateOfReturn() {
    const matches = Object.values(this.#statistics);
    let totalRevenueMoney = 0;

    matches.forEach(({ count, prize }) => (totalRevenueMoney += count * prize));
    this.#totalRevenueRate = (totalRevenueMoney / this.#money) * 100;
  }

  getLottoResult() {
    const statisticsTable = this.#statistics.getTable();
    const revenueRate = this.calculateRateOfReturn();

    return { statisticsTable, revenueRate };
  }

  showLottoResult() {
    const { statisticsTable, revenueRate } = this.getLottoResult();
    const statistics = Object.entries(statisticsTable);

    OutputView.printStatisticsHeader();
    OutputView.printStatistics(statistics);
    OutputView.printRevenueRate(revenueRate);
  }
}

export default LottoController;
