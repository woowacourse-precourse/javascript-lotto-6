import Lotto from '../Lotto';

class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Lotto(winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
