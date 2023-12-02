import Validator from '../validator/Validator.js';

class WinningNumbers {
  #winningLotto;

  #bonusNumber;

  constructor(winningLotto, bonusNumber) {
    Validator.validateBonusNumber(winningLotto.getNumbers(), bonusNumber);
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
  }

  getWinningLotto() {
    return this.#winningLotto;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumbers;
