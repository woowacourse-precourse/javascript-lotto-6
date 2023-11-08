import { LOTTO, RANKING, STATISTICS } from '../common/constants.js';

import { generateRandomNumber } from '../common/utils.js';
import Lotto from '../Lotto.js';

class LottoService {
  
  #lottos;
  
  #ranking;
  
  #profit;

  constructor() {
    this.#lottos = [];
    this.#ranking = new Map();
    this.#profit = 0;

    this.#initRankingMap();
  }

  calculateProfit(moneyAmount) {
    const totalPrize = this.#calculateTotalPrize();
    this.#profit = (totalPrize / moneyAmount) * 100;
  }

  compareLotto(winningNumbers, bonusNumber) {
    this.#lottos.forEach(lotto => {
      const { matchedCount, bonus } = this.#calculateMatchAndBonus(lotto, winningNumbers, bonusNumber);
      this.#calculateRanking(matchedCount, bonus);
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
    return this.#profit;
  }

  getStatisticsArray() {
    return Array.from(this.#ranking).map(([key, count]) => RANKING[key].message + count + STATISTICS.count);
  }

  #initRankingMap() {
    Object.keys(RANKING).forEach(key => {
      this.#ranking.set(key, 0);
    });
  }

  #calculateTotalPrize() {
    return Array.from(this.#ranking).reduce((total, [key, count]) => {
      const rank = RANKING[key];
      return total + rank.prize * count;
    }, 0);
  }

  #calculateMatchAndBonus(lotto, winningNumbers, bonusNumber) {
    const matchedCount = winningNumbers.filter(number => lotto.getNumbers().includes(number)).length;
    const bonus = lotto.getNumbers().includes(bonusNumber);
    return { matchedCount, bonus };
  }

  #calculateRanking(matchedCount, bonus) {
    Object.entries(RANKING).forEach(([key, rank]) => {
      if (rank.match === matchedCount && rank.bonus === bonus) {
        const existingValue = this.#ranking.get(key);
        this.#ranking.set(key, existingValue + 1);
      }
    });
  }
}

export default LottoService;
