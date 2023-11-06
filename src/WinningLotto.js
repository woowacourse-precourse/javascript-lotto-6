import Lotto from './Lotto.js';
import { validateBonusNumber } from './utils/validate.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    validateBonusNumber(bonusNumber, numbers);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
