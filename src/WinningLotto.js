import Lotto from './Lotto.js';
import { ERROR } from './Message.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(number) {
    throw new Error(ERROR.notOneToFortyFive);
  }
}

export default WinningLotto;
