import Lotto from '../Lotto.js';
import Validation from '../service/Validation.js';

const NUMBER_NAME = {
  winning: '당첨',
  bonus: '보너스',
};

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
      [NUMBER_NAME.winning, winningNumbers],
      [NUMBER_NAME.bonus, this.#bonusNumber],
    ]);

    return totalNumbers;
  }
}

export default WinningLotto;
