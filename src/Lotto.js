import { GAME_RULE } from './constants/gameRule.js';
import { ERROR_MESSAGE } from './constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNT);
    }

    if (new Set(numbers).size !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NOT_A_UNIQUE);
    }
  }

  getLottoNumbers() {
    return [...this.#numbers];
  }

  getMatchWinningNumbers(winningNumbers) {
    return winningNumbers.filter((winningNumber) =>
      this.#numbers.includes(winningNumber),
    );
  }

  isMatchBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
