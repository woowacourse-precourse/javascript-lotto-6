import Lotto from '../Lotto.js';
import { OTHERS, NUMBER } from '../utils/constants.js';

class GameCalculator {
  constructor(purchaseLottos, winningNumbers, bonusNumber) {
    this.purchaseLottos = purchaseLottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.winngingResult = OTHERS.initialWinningResult;
    this.lotto = null;
  }

  calculate() {
    this.purchaseLottos.forEach((lotto) => {
      this.lotto = new Lotto(lotto);
      const RESULT_PER_LOTTO = this.lotto.getResultPerLotto(this.bonusNumber, this.winningNumbers);

      if(RESULT_PER_LOTTO >= 3 && RESULT_PER_LOTTO <= 6) {
        const RESULT_KEY = (RESULT_PER_LOTTO === 6) ? NUMBER.seven : String(RESULT_PER_LOTTO);
        this.winngingResult[RESULT_KEY] += 1
      }
      
      if(RESULT_PER_LOTTO === OTHERS.bonusNumber) {
        this.winngingResult[NUMBER.six] += 1;
      }
    });
    
    return this.winngingResult;
  }
}

export default GameCalculator;
