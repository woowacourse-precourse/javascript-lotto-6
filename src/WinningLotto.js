import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
    this.#bonusNumber = 0;
  }
}

export default WinningLotto;
