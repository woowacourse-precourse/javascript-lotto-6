import Lotto from './Lotto.js';
import Validation from '../utils/validation.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor({ numbers, bonusNumber }) {
    super(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    Validation.isBonusNumberOk(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
export default WinningLotto;
