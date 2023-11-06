import Lotto from './Lotto.js';
import NumberGenerator from './util/NumberGenerator.js';

class LottoSimulator {
  #lottos
  #ranks
  #prizeMoneys

  constructor() {
    this.#lottos = [];
    this.#ranks = [];
    this.#prizeMoneys = [200000000, 30000000, 1500000, 50000, 5000];
  }

  issueLotto(quantity) {
    Array(quantity).fill().map(() => {
      const lotto = new Lotto(NumberGenerator.generator(6));
      this.#lottos.push(lotto.getNumbers());
    })
  }

  compareWinningNumber(winningNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const winning = lotto.filter((number) => winningNumber.includes(number));
      result.push(winning.length);
    });

    return result;
  }

  compareBonusNumber(bonusNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const bonus = lotto.includes(bonusNumber);
      result.push(bonus);
    })

    return result;
  }
  
  rank(winningNumber, bonusNumber) {
    if (winningNumber === 6) return 0;
    if (winningNumber === 5 && bonusNumber) return 1;
    if (winningNumber === 5) return 2;
    if (winningNumber === 4) return 3;
    if (winningNumber === 3) return 4;

    return false;
  }

  drawingLotto(winningNumber, bonusNumber) {
    const winnings = this.compareWinningNumber(winningNumber);
    const bonusNumbers = this.compareBonusNumber(bonusNumber);

    winnings.map((winning, ticket) => {
      const rank = this.rank(winning, bonusNumbers[ticket]);
      if (rank) this.#ranks.push(rank);
    })
  }

  totalPrizeMoney() {
    let money = 0;
    this.#ranks.map((rank) => money += this.#prizeMoneys[rank]);

    return money;
  }

  calculateEarningsPercent(money, amount) {
    return ((money / amount) * 100).toFixed(1);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoSimulator;
