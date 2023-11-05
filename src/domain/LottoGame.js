import Lotto from '../Lotto.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
class LottoGame {
  #purchasedLotto;

  constructor(amount) {
    this.#purchasedLotto = this.generateLottoTickets(amount);
  }

  generateLottoTickets(amount) {
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

  // 일치한 숫자에 따른 당첨등수
  createEmptyStatistics() {
    return {
      firstPrize: 0,
      secondPrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
    };
  }

  // 일치한 번호만큼 해당하는 등수를 카운팅해서 등수를 반환함
  getStatistics(comparisonResults) {
    const statistics = this.createEmptyStatistics();

    comparisonResults.forEach(({ matchingCount, hasBonusNumber }) => {
      if (matchingCount === 6) statistics.firstPrize += 1;
      if (matchingCount === 5 && hasBonusNumber) statistics.secondPrize += 1;
      if (matchingCount === 5 && !hasBonusNumber) statistics.thirdPrize += 1;
      if (matchingCount === 4) statistics.fourthPrize += 1;
      if (matchingCount === 3) statistics.fifthPrize += 1;
    });

    return statistics;
  }
}

export default LottoGame;

/* 테스트용 콘솔
const lotto = new LottoGame(2);
console.log(lotto.getPurchasedLotto(), '로또티켓');
console.log(lotto.getLottoComparisonResults([1, 2, 3, 4, 5, 6], 7), '일치여부');
console.log(
  lotto.getStatistics([
    { matchingCount: 5, hasBonusNumber: false },
    { matchingCount: 5, hasBonusNumber: true },
  ])
);
*/
