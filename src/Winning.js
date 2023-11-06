import {
  WINNING_NUMBERS_ERROR_MESSAGE,
  WINNING_BONUS_ERROR_MESSAGE,
} from './constants/errorMessage.js';
import Validate from './Validate.js';

class Winning {
  #winningNumbers;

  #bonusNumber;

  setWinningNumbers(winningNumbers) {
    Winning.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  setBonusNumber(bonusNumber) {
    Winning.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  match(lotto) {
    return {
      matchCount: this.#matchWinningNumbers(lotto),
      matchBonus: this.#matchBonusNumber(lotto),
    };
  }

  #matchWinningNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = this.#winningNumbers.filter((number) =>
      lottoNumbers.includes(number),
    ).length;

    return matchCount;
  }

  #matchBonusNumber(lotto) {
    const lottoNumbers = lotto.getNumbers();

    return lottoNumbers.includes(this.#bonusNumber);
  }

  static #validateWinningNumbers(winningNumbers) {
    const { sixNumber, duplicate, integer, inRange } = WINNING_NUMBERS_ERROR_MESSAGE;
    Validate.isSixNumbers(winningNumbers, sixNumber);
    Validate.isDuplicate(winningNumbers, duplicate);
    Validate.isInteger(winningNumbers, integer);
    Validate.isInRange(winningNumbers, inRange);
  }

  static #validateBonusNumber(bonusNumber) {
    const { integer, inRange } = WINNING_BONUS_ERROR_MESSAGE;
    Validate.isInteger([bonusNumber], integer);
    Validate.isInRange([bonusNumber], inRange);
  }
}

export default Winning;
