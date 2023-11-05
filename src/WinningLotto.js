import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#bonusNumber = bonusNumber;
  }
}

export default WinningLotto;
