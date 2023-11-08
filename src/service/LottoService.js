import { LOTTO, RANKING, STATISTICS } from '../common/constants.js';

import Lotto from '../Lotto.js';
import { generateRandomNumber } from '../common/utils.js';
import Profit from '../model/Profit.js';
import Ranking from '../model/Ranking.js';

class LottoService {
  
  #lottos;
  
  #ranking;
  
  #profit;

  constructor() {
    this.#lottos = [];
    this.#ranking = new Ranking();
    this.#profit = new Profit();
  }

  calculateProfit(moneyAmount) {
    this.#profit.calculateProfit(moneyAmount, this.#ranking);
  }

  compareLotto(winningNumbers, bonusNumber) {
    this.#lottos.forEach(lotto => {
      const { matchedCount, isBonusMatched } = this.#calculateMatchAndBonus(lotto, winningNumbers, bonusNumber);
      this.#ranking.calculateRanking(matchedCount, isBonusMatched);
    });
  }

  generateLottos(lottoCount) {
    for (let count = 0; count < lottoCount; count += 1) {
      const generatedNumber = generateRandomNumber(LOTTO.min_number, LOTTO.max_number, LOTTO.max_match);
      this.#lottos.push(new Lotto(generatedNumber));
    }
  }

  getLottos() {
    return this.#lottos;
  }

  getProfit() {
    return this.#profit.getAmount();
  }

  getStatisticsArray() {
    return Array.from(this.#ranking.getRanks()).map(([key, count]) => RANKING[key].message + count + STATISTICS.count);
  }

  #calculateMatchAndBonus(lotto, winningNumbers, bonusNumber) {
    const matchedCount = winningNumbers.filter(number => lotto.getNumbers().includes(number)).length;
    const isBonusMatched = lotto.getNumbers().includes(bonusNumber);
    return { matchedCount, isBonusMatched };
  }
}

export default LottoService;
