import { ERROR } from './constant/index.js';

class BonusNumber {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#validate(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validate(number) {
    if (!/^[1-9][0-9]*$/.test(number)) {
      throw new Error(ERROR.BONUS_NUMBER.NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.BONUS_NUMBER.RANGE);
    }

    if (this.#winningNumbers.includes(Number(number))) {
      throw new Error(ERROR.BONUS_NUMBER.UNIQUE);
    }
  }
}

export default BonusNumber;
