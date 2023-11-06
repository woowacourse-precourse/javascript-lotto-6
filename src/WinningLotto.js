import Lotto from './Lotto.js';
import { ERROR } from './Message.js';

class WinningLotto extends Lotto {
  #START = 1;
  #END = 45;

  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(number) {
    if (number < this.#START || number > this.#END) {
      throw new Error(ERROR.notOneToFortyFive);
    }
    throw new Error(ERROR.notUniqueBonusNumber);
  }
}

export default WinningLotto;
