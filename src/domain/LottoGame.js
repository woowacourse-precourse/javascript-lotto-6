import Lotto from '../Lotto.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import {
  PRIZE_AMOUNT,
  PRICE_PER_TICKET,
  INITIAL_STATISTICS,
  PRIZE_KEY,
} from '../constants/constants.js';

class LottoGame {
  #purchasedLotto = [];

  initializeLotto(amount) {
    this.#purchasedLotto = this.#generateLottoTickets(amount);
  }

  #generateLottoTickets(amount) {
    return Array.from({ length: amount }, () => new Lotto(randomNumberGenerator()));
  }

  // 티켓 수만큼 로또 비교 결과를 얻는 메서드 [{matchingCount, hasBonusNumber}]
  getLottoComparisonResults(winningNumbers, bonusNumber) {
    return this.#purchasedLotto.map((lotto) =>
      lotto.getLottoComparisonResults(winningNumbers, bonusNumber)
    );
  }

  getPurchasedLotto() {
    return this.#purchasedLotto.map((lotto) => lotto.getSortedLotto());
  }

  getStatistics(comparisonResults) {
    const statistics = { ...INITIAL_STATISTICS };

    comparisonResults.forEach(({ matchingCount, hasBonusNumber }) => {
      this.#updateStatistics(statistics, matchingCount, hasBonusNumber);
    });

    return statistics;
  }

  #updateStatistics(statistics, matchingCount, hasBonusNumber) {
    if (matchingCount === 6) statistics[PRIZE_KEY.firstPrize] += 1;
    if (matchingCount === 5 && hasBonusNumber) statistics[PRIZE_KEY.secondPrize] += 1;
    if (matchingCount === 5 && !hasBonusNumber) statistics[PRIZE_KEY.thirdPrize] += 1;
    if (matchingCount === 4) statistics[PRIZE_KEY.fourthPrize] += 1;
    if (matchingCount === 3) statistics[PRIZE_KEY.fifthPrize] += 1;
  }

  calcTotalPrizeAmount(statistics) {
    return Object.entries(statistics).reduce((acc, [prize, count]) => {
      return acc + PRIZE_AMOUNT[prize] * count;
    }, 0);
  }

  getProfitRatio(totalPrizeAmount) {
    const profitRatio = (totalPrizeAmount / (this.#purchasedLotto.length * PRICE_PER_TICKET)) * 100;
    return profitRatio.toFixed(1);
  }
}

export default LottoGame;
