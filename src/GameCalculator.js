import Lotto from './Lotto.js';
import { OTHERS, NUMBER } from './utils/constants.js';

class GameCalculator {
  constructor(purchaseLottos, winningNumbers, bonusNumber) {
    this.purchaseLottos = purchaseLottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.winngingResult = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    this.lotto = null;
  }

  calculate() {
    this.purchaseLottos.forEach((lotto) => {
      this.lotto = new Lotto(lotto);
      const RESULT_PER_LOTTO = this.lotto.getResultPerLotto(this.bonusNumber, this.winningNumbers);

      if (RESULT_PER_LOTTO === 3) {
        this.winngingResult[NUMBER.three] += 1;
      }

      if (RESULT_PER_LOTTO === 4) {
        this.winngingResult[NUMBER.four] += 1;
      }

      if (RESULT_PER_LOTTO === 5) {
        this.winngingResult[NUMBER.five] += 1;
      }

      if (RESULT_PER_LOTTO === OTHERS.bonusNumber) {
        this.winngingResult[NUMBER.six] += 1;
      }

      if (RESULT_PER_LOTTO === 6) {
        this.winngingResult[NUMBER.seven] += 1;
      }
    });

    return this.winngingResult;
  }
}

export default GameCalculator;
