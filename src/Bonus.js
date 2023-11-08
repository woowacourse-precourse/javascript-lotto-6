import { BONUS_NUMBER } from './constants/Error.js';
import { GAME } from './constants/Setting.js';

class Bonus {
  #number;

  constructor(winningNumbers, inputBonusNumber) {
    const bonusNumber = Number(inputBonusNumber);
    this.#validate(winningNumbers, bonusNumber);
    this.#number = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(BONUS_NUMBER.notNumber);
    }
    if (bonusNumber < GAME.minNumber || bonusNumber > GAME.maxNumber) {
      throw new Error(BONUS_NUMBER.invalidRange);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER.notWinningNumber);
    }
  }

  get bonusNumber() {
    return this.#number;
  }
}

export default Bonus;
