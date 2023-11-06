import Lotto from './Lotto.js';
import NumberGenerator from './util/NumberGenerator.js';

class LottoSimulator {
  #lottos
  #ranks
  #prizeMoneys

  constructor() {
    this.#lottos = [];
    this.#ranks = Array(5).fill(0);
    this.#prizeMoneys = [5000, 50000, 1500000, 3000000, 2000000];
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
  
  #rank(winningNumber, bonusNumber) {
    if (winningNumber === 6) return 4;
    if (winningNumber === 5 && bonusNumber) return 3;
    if (winningNumber === 5) return 2;
    if (winningNumber === 4) return 1;
    if (winningNumber === 3) return 0;
  }

  drawingLotto(winningNumber, bonusNumber) {
    const winnings = this.compareWinningNumber(winningNumber);
    const bonusNumbers = this.compareBonusNumber(bonusNumber);

    winnings.map((winning, ticket) => {
      const rank = this.#rank(winning, bonusNumbers[ticket]);
      if (rank !== undefined) {
        this.#ranks[rank] += 1;
      }
    })
  }

  totalPrizeMoney() {
    let money = 0;
    this.#ranks.map((rank, index) => {
      if(rank) money += (this.#prizeMoneys[index] * rank);
    });

    return money;
  }

  calculateEarningsPercent(money, amount) {
    return ((money / amount) * 100).toFixed(1);
  }

  getLottos() {
    return this.#lottos;
  }

  getRanks() {
    return this.#ranks;
  }
}

export default LottoSimulator;
