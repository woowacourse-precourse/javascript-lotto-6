import { Console } from '@woowacourse/mission-utils';
import { ERROR, INPUT } from '../constant/index.js';

class InputView {
  static async readBuyingPrice() {
    const input = await Console.readLineAsync(INPUT.BUYING_PRICE);
    return input;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT.WINNING_NUMBERS);
    InputView.#validateWinningNumbers(input);
    return input.split(',').map(Number);
  }

  static #validateWinningNumbers(input) {
    const numbers = input.split(',').map(number => number.trim());

    if (numbers.length !== 6) {
      throw new Error(ERROR.WINNING_NUMBERS.LENGTH);
    }

    const INVALID_RANGE = numbers.some(number => number < 1 || number > 45);
    if (INVALID_RANGE) {
      throw new Error(ERROR.WINNING_NUMBERS.RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR.WINNING_NUMBERS.UNIQE);
    }
  }

  static async readBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(INPUT.BONUS_NUMBERS);
    InputView.#validateBonusNumber(input, winningNumbers);
    return Number(input);
  }

  static #validateBonusNumber(input, winningNumbers) {
    if (!/^[1-9][0-9]*$/.test(input)) {
      throw new Error(ERROR.BONUS_NUMBER.NUMBER);
    }

    if (input < 1 || input > 45) {
      throw new Error(ERROR.BONUS_NUMBER.RANGE);
    }

    if (winningNumbers.includes(Number(input))) {
      throw new Error(ERROR.BONUS_NUMBER.UNIQUE);
    }
  }
}

export default InputView;
