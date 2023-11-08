import Lotto from './Lotto.js';
import Validation from './service/Validation.js';
import { NUMBER_OPTIONS } from './service/Constants.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);

    this.#validateBonus(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonus(bonusNumber) {
    Validation.isNumber(bonusNumber);
    Validation.isNumberInRange(bonusNumber);

    const winningNumbers = this.getNumbers();
    Validation.isNonDuplicatedBonusNumber(bonusNumber, winningNumbers);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getTotalNumbers() {
    const winningNumbers = this.getNumbers();
    const totalNumbers = new Map([
      [NUMBER_OPTIONS.winningName, winningNumbers],
      [NUMBER_OPTIONS.bonusName, this.#bonusNumber],
    ]);

    return totalNumbers;
  }
}

export default WinningLotto;
