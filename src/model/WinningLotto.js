import Lotto from './Lotto.js';
import { isMadeWithUniqueNumber } from '../validator/LottoValidate.js';

class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Lotto(winningNumbers);
    this.#validate(winningNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    isMadeWithUniqueNumber(winningNumbers, bonusNumber);
  }

  calculateScore(candidateLotto) {
    const winningNumbers = this.#winningNumbers.getNumbers();

    let score = 0;
    winningNumbers.forEach((winningNumber) => {
      if (candidateLotto.checkNumberContain(winningNumber)) score += 1;
    });
    if (score === 5 && candidateLotto.checkNumberContain(this.#bonusNumber))
      score += 0.5;

    return score;
  }
}

export default WinningLotto;
