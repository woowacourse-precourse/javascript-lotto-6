import {
  winningNumbersErrorMessage,
  winningBonusErrorMessage,
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
    Validate.isSixNumbers(winningNumbers, winningBonusErrorMessage.sixNumber);
    Validate.isDuplicate(winningNumbers, winningNumbersErrorMessage.duplicate);
    Validate.isInteger(winningNumbers, winningNumbersErrorMessage.integer);
    Validate.isInRange(winningNumbers, winningNumbersErrorMessage.inRange);
  }

  static #validateBonusNumber(bonusNumber) {
    Validate.isInteger([bonusNumber], winningBonusErrorMessage.integer);
    Validate.isInRange([bonusNumber], winningBonusErrorMessage.inRange);
  }

  static #isMatch(baseNumbers, targetNumber) {
    const answer = baseNumbers.includes(targetNumber);

    return answer;
  }
}

export default Winning;
