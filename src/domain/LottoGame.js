import Lotto from '../Lotto.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import {
  PRIZE_AMOUNT,
  PRICE_PER_TICKET,
  INITIAL_STATISTICS,
  PRIZE_KEY,
  RANK,
} from '../constants/constants.js';

class LottoGame {
  #purchasedLotto = [];

  initializeLotto(amount) {
    this.#purchasedLotto = this.#generateLottoTickets(amount);
  }

  /**
   * 랜덤값을 담은 로또 인스턴스를 수량만큼 생성하여 배열로 반환한다.
   * @param {number} amount
   * @returns { Lotto[] }
   */
  #generateLottoTickets(amount) {
    return Array.from({ length: amount }, () => new Lotto(randomNumberGenerator()));
  }

  getPurchasedLotto() {
    return this.#purchasedLotto.map((lotto) => lotto.getSortedNumbers());
  }

  /**
   * 모든 로또들의 당첨번호 일치카운트와 보너스번호 포함여부를 반환한다.
   * @param { number[] } winningNumbers
   * @param { number } bonusNumber
   * @returns { [{ matchingCount: number, hasBonusNumber: boolean }] } comparisonResults
   */
  getComparisonResults(winningNumbers, bonusNumber) {
    return this.#purchasedLotto.map((lotto) =>
      lotto.getLottoComparisonResults(winningNumbers, bonusNumber)
    );
  }

  /**
   * 모든 로또들의 각 당첨등수를 카운팅한 통계를 반환한다.
   * @param { [{ matchingCount: number, hasBonusNumber: boolean }] } comparisonResults
   * @returns { { [PRIZE_KEY] : number } } statistics
   */
  getStatistics(comparisonResults) {
    const statistics = { ...INITIAL_STATISTICS };

    comparisonResults.forEach(({ matchingCount, hasBonusNumber }) => {
      this.#updateStatistics(statistics, matchingCount, hasBonusNumber);
    });

    return statistics;
  }

  #updateStatistics(statistics, matchingCount, hasBonusNumber) {
    if (matchingCount === RANK.first) statistics[PRIZE_KEY.firstPrize] += 1;
    if (matchingCount === RANK.second && hasBonusNumber) statistics[PRIZE_KEY.secondPrize] += 1;
    if (matchingCount === RANK.third && !hasBonusNumber) statistics[PRIZE_KEY.thirdPrize] += 1;
    if (matchingCount === RANK.fourth) statistics[PRIZE_KEY.fourthPrize] += 1;
    if (matchingCount === RANK.fifth) statistics[PRIZE_KEY.fifthPrize] += 1;
  }

  /**
   * 모든 당첨 등수의 상금을 합산한 값을 반환한다.
   * @param { { [PRIZE_KEY] : number } } statistics
   * @returns { number } - totalPrizeAmount
   */
  getTotalPrizeAmount(statistics) {
    return Object.entries(statistics).reduce((acc, [prizeKey, count]) => {
      return acc + PRIZE_AMOUNT[prizeKey] * count;
    }, 0);
  }

  /**
   * 소수점 첫번째 자리까지 반올림한 총 수익률을 계산하여 반환한다.
   * @param { number } - totalPrizeAmount
   * @returns { number } - 총 수익률
   */
  getProfitRatio(totalPrizeAmount) {
    const totalTicketCost = this.#purchasedLotto.length * PRICE_PER_TICKET;
    return ((totalPrizeAmount / totalTicketCost) * 100).toFixed(1);
  }
}

export default LottoGame;
