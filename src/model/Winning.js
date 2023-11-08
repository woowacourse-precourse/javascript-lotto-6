import {
  WINNING_NUMBERS_ERROR_MESSAGE,
  WINNING_BONUS_ERROR_MESSAGE,
} from '../constants/errorMessage';
import Validation from '../Validation';

class Winning {
  #winningNumbers;

  #bonusNumber;

  setWinningNumbers(winningNumbers) {
    Winning.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  setBonusNumber(bonusNumber) {
    Winning.#validateBonusNumber(this.#winningNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  matchLottoNumbers(lotto) {
    return {
      matchCount: this.#matchWinningNumbers(lotto),
      matchBonus: this.#matchBonusNumber(lotto),
    };
  }

  #matchWinningNumbers(lottoNumbers) {
    const matchCount = this.#winningNumbers.filter((number) =>
      lottoNumbers.includes(number),
    ).length;

    return matchCount;
  }

  #matchBonusNumber(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }

  static #validateWinningNumbers(winningNumbers) {
    const { sixNumber, duplicate, integer, inRange } = WINNING_NUMBERS_ERROR_MESSAGE;
    new Validation(winningNumbers)
      .isSixNumbers(sixNumber)
      .isDuplicate(duplicate)
      .isInteger(integer)
      .isInRange(inRange);
  }

  static #validateBonusNumber(winningNumbers, bonusNumber) {
    const { integer, inRange, notInNumberSet } = WINNING_BONUS_ERROR_MESSAGE;
    new Validation([bonusNumber])
      .isInteger(integer)
      .isInRange(inRange)
      .isNumberNotInNumbers(winningNumbers, notInNumberSet);
  }
}

export default Winning;
