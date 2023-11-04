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
}

export default LottoGame;

/*
테스트용 콘솔
const lotto = new LottoGame(2);
console.log(lotto.getLottoTickets(), '로또티켓');
console.log(lotto.getLottoComparisonResults([1, 2, 3, 4, 5, 6], 7), '일치여부');
*/
