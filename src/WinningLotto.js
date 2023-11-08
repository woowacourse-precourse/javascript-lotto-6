import Lotto from './Lotto.js';
import { validateBonusNumber } from './utils/validate.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
    this.#bonusNumber = null;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }
}

export default WinningLotto;
