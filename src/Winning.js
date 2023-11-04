import {
  WINNING_NUMBERS_ERROR_MESSAGE,
  WINNING_BONUS_ERROR_MESSAGE,
} from './constants/errorMessage';
import Validate from './Validate';

class Winning {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    Winning.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;

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
    const matchCount = this.#winningNumbers.reduce((acc, cur) => {
      const isMatch = Winning.#isMatch(lottoNumbers, cur);

      if (isMatch) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return matchCount;
  }

  #matchBonusNumber(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const isMatch = Winning.#isMatch(lottoNumbers, this.#bonusNumber);
    return isMatch;
  }

  static #validateWinningNumbers(winningNumbers) {
    Validate.isSixNumbers(
      winningNumbers,
      WINNING_BONUS_ERROR_MESSAGE.sixNumber,
    );
    Validate.isDuplicate(
      winningNumbers,
      WINNING_NUMBERS_ERROR_MESSAGE.duplicate,
    );
    Validate.isInteger(winningNumbers, WINNING_NUMBERS_ERROR_MESSAGE.integer);
    Validate.isInRange(winningNumbers, WINNING_NUMBERS_ERROR_MESSAGE.inRange);
  }

  static #validateBonusNumber(bonusNumber) {
    Validate.isInteger([bonusNumber], WINNING_BONUS_ERROR_MESSAGE.integer);
    Validate.isInRange([bonusNumber], WINNING_BONUS_ERROR_MESSAGE.inRange);
  }

  static #isMatch(baseNumbers, targetNumber) {
    const answer = baseNumbers.includes(targetNumber);

    return answer;
  }
}

export default Winning;
