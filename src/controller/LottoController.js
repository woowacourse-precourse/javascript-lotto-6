import { getMatchCount, includeBonusNumber } from '../utils/match.js';
import LottoShop from '../domain/LottoShop.js';
import Statistics from '../domain/Statistics.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #money;
  #lottos;
  #statistics;

  constructor(money) {
    this.#money = money;
    this.#lottos = LottoShop.purchaseLotto(money);
    this.#statistics = new Statistics();
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

  getLottoResult() {
    const statisticsTable = this.#statistics.getTable();
    const revenueRate = this.#statistics.calculateRevenueRate(this.#money);

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
