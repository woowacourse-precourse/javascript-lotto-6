import Lotto from './Lotto.js';
import { OTHERS, NUMBER } from './utils/constants.js';

class GameCalculator {
  constructor(lottoNumberArray, winningNumbers, bonusNumber) {
    this.lottoNumberArray = lottoNumberArray;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.objForResult = { 3: 0, 4: 0, 5: 0, '5+1': 0, 6: 0 };
    this.lotto = null;
  }

  calculate() {
    this.lottoNumberArray.forEach((lotto) => {
      this.lotto = new Lotto(lotto);
      const RESULT_PER_LOTTO = this.lotto.getResultForEachLotto(
        this.bonusNumber,
        this.winningNumbers
      );

      if (RESULT_PER_LOTTO === 3) {
        this.objForResult[NUMBER.three] += 1;
      }

      if (RESULT_PER_LOTTO === 4) {
        this.objForResult[NUMBER.four] += 1;
      }

      if (RESULT_PER_LOTTO === 5) {
        this.objForResult[NUMBER.five] += 1;
      }

      if (RESULT_PER_LOTTO === OTHERS.bonusNumber) {
        this.objForResult[NUMBER.fiveBonus] += 1;
      }

      if (RESULT_PER_LOTTO === 6) {
        this.objForResult[NUMBER.six] += 1;
      }
    });

    return this.objForResult;
  }
}

export default GameCalculator;
