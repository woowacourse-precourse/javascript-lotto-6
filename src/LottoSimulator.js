import Lotto from './Lotto.js';
import NumberGenerator from './util/NumberGenerator.js';

class LottoSimulator {
  #lottos
  #rankMap

  constructor() {
    this.#lottos = [];
    this.#rankMap = Array(5).fill(0);
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
    if (winningNumber === 6) return 1;
    if (winningNumber === 5 && bonusNumber) return 2;
    if (winningNumber === 5) return 3;
    if (winningNumber === 4) return 4;
    if (winningNumber === 3) return 5;

    return false;
  }

  drawingLotto(winningNumber, bonusNumber) {
    const result = [];
    const winnings = this.compareWinningNumber(winningNumber);
    const bonusNumbers = this.compareBonusNumber(bonusNumber);

    winnings.map((winning, ticket) => {
      const rank = this.rank(winning, bonusNumbers[ticket]);
      if (rank) result.push(rank);
    })

    return result;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoSimulator;
