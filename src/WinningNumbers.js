import { ERROR, LOTTO } from './constant/index.js';

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers) {
    WinningNumbers.#validate(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  static #validate(numbers) {
    if (numbers.length !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.WINNING_NUMBERS.LENGTH);
    }

    const isInvalidRange = numbers.some(
      number => number < LOTTO.NUMBERS.MIN || number > LOTTO.NUMBERS.MAX
    );
    if (isInvalidRange) {
      throw new Error(ERROR.WINNING_NUMBERS.RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR.WINNING_NUMBERS.UNIQE);
    }
  }
}

export default WinningNumbers;
